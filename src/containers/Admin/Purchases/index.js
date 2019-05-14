import React from 'react';
import ReactTable from 'react-table';
import ReactTooltip from 'react-tooltip';
import '../style.css';
import {fetchTxs, linkTxs} from '../utils';
import {Button, Checkbox, Modal, Popconfirm} from 'antd';
import _ from 'lodash';
import {paymentColumns, purchaseColumns} from '../sharedTableData';

export default class Purchases extends React.Component {
    state = {
        payments: [],
        purchases: [],
        modalSelected: null,
        modalLinkSelected: {},
        modalReview: null,
    };

    tableColumns = [...purchaseColumns, {
        Header: '',
        id: 'Link',
        className: 'cell-button',
        Cell: (props) => {
            if (props.original.TwId) {
                return (
                    <Button htmlType="button" block type="primary" size="small" onClick={() => this.openReviewModal(props.original)}>
                        Review
                    </Button>
                );
            }
            else {
                return (
                    <Button htmlType="button" block size="small" onClick={() => this.openModal(props.original)}>
                        Link to Payment
                    </Button>
                );
            }
        },
    }, {
        Header: '',
        id: 'Hide',
        className: 'cell-button',
        width: 110,
        Cell: (props) => {
            return (
                <Popconfirm
                    onConfirm={() => this.hideTansaction(props.original.TxId)}
                    okText="Yes"
                    cancelText="No"
                    title="Are you sure?">
                    <Button htmlType="button" block size="small">No payment</Button>
                </Popconfirm>
            );
        },
    }];

    modalTableColumns = [{
        Header: '',
        id: 'Checkbox',
        className: 'cell-button',
        width: 50,
        Cell: (props) => {
            return (
                <Checkbox
                    checked={!!this.state.modalLinkSelected[props.original.TwId]}
                    onChange={e => this.toggleSelection(props.original, e.target.checked)}/>
            );
        },
    }, ...paymentColumns];

    componentDidMount() {
        this.fetchData();
    }

    openModal = (data) => {
        this.setState({
            modalSelected: data,
            modalLinkSelected: {},
        }, () => {
            ReactTooltip.rebuild()
        });
    };

    closeModal = () => {
        this.setState({
            modalSelected: null,
        });
    };

    openReviewModal = (data) => {
        this.setState({
            modalReview: data,
        }, () => {
            ReactTooltip.rebuild()
        });
    };

    closeReviewModal = () => {
        this.setState({
            modalReview: null,
        });
    };

    confirmReview = () => {
        this.linkTransactions(this.state.modalReview.TxId, this.state.modalReview.TwId);
    };

    toggleSelection = (tx, value = !this.state.modalLinkSelected[tx.TwId]) => {
        this.setState({
            modalLinkSelected: value ? {
                ...this.state.modalLinkSelected,
                [tx.TwId]: tx,
            } : _.omit(this.state.modalLinkSelected, [tx.TwId])
        });
    };

    linkSelected = () => {
        this.linkTransactions(this.state.modalSelected.TxId, Object.keys(this.state.modalLinkSelected));
    };

    linkTransactions = (TxId, TwId) => {
        this.setState({
            modalSelected: null,
            modalReview: null,
        });

        linkTxs(TxId, TwId, this.props.user.email).then(() => this.fetchData());
    };

    hideTansaction = (TxId) => {
        linkTxs(TxId, undefined, this.props.user.email).then(() => this.fetchData());
    };

    fetchData = () => {
        fetchTxs().then(data => {
            const payments = data.filter(tx => !!tx.TwId);
            const purchases = data.filter(tx => !!tx.TxId);

            this.setState({
                payments,
                purchases,
            }, () => {
                ReactTooltip.rebuild()
            });
        });
    };

    render () {
        return (
            <div>
                <ReactTable
                    data={this.state.purchases}
                    columns={this.tableColumns}
                    resizable={false}
                    getTdProps={(state, row, column) => ({
                        'data-for': 'celltooltip',
                        'data-tip': row ? row.row[column.id] : '',
                    })}/>

                <Modal
                    visible={!!this.state.modalSelected}
                    title="Link Purchase to Payment"
                    width="90%"
                    footer={(
                        <Button
                            type="primary"
                            htmlType="button"
                            onClick={this.linkSelected}
                            disabled={Object.keys(this.state.modalLinkSelected).length === 0}>
                            Link payments
                        </Button>
                    )}
                    onCancel={this.closeModal}
                    destroyOnClose>
                    <h4>Selected Purchase</h4>
                    <ReactTable
                        data={[this.state.modalSelected]}
                        columns={purchaseColumns}
                        minRows={1}
                        sortable={false}
                        showPagination={false}
                        resizable={false}
                        getTdProps={(state, row, column) => ({
                            'data-for': 'celltooltip',
                            'data-tip': (row && column.id) ? row.row[column.id] : '',
                        })}/>

                    <br/>
                    <h4>Payments</h4>
                    <ReactTable
                        data={this.state.payments}
                        columns={this.modalTableColumns}
                        resizable={false}
                        minRows={1}
                        getTrProps={(state, row, column) => ({
                            onClick: (e) => row && this.toggleSelection(row.original),
                            className: 'clickable-table-row',
                        })}
                        getTdProps={(state, row, column) => ({
                            'data-for': 'celltooltip',
                            'data-tip': (row && column.id) ? row.row[column.id] : '',
                        })}/>

                    <ReactTooltip
                        id="celltooltip"
                        effect="solid"
                        place="top"
                        delayShow={1000}
                        offset={{top: -15}}
                        className="cell-tooltip-style"/>
                </Modal>

                <Modal
                    visible={!!this.state.modalReview}
                    title="Review"
                    width="90%"
                    footer={(
                        <Button
                            type="primary"
                            htmlType="button"
                            onClick={this.confirmReview}>
                            Confirm
                        </Button>
                    )}
                    onCancel={this.closeReviewModal}
                    destroyOnClose>
                    <h4>Purchase</h4>
                    <ReactTable
                        data={[this.state.modalReview]}
                        columns={purchaseColumns}
                        minRows={1}
                        sortable={false}
                        showPagination={false}
                        resizable={false}
                        getTdProps={(state, row, column) => ({
                            'data-for': 'celltooltip',
                            'data-tip': (row && column.id) ? row.row[column.id] : '',
                        })}/>

                    <br/>
                    <h4>Payment</h4>
                    <ReactTable
                        data={[this.state.modalReview]}
                        columns={paymentColumns}
                        minRows={1}
                        sortable={false}
                        showPagination={false}
                        resizable={false}
                        getTdProps={(state, row, column) => ({
                            'data-for': 'celltooltip',
                            'data-tip': (row && column.id) ? row.row[column.id] : '',
                        })}/>

                    <ReactTooltip
                        id="celltooltip"
                        effect="solid"
                        place="top"
                        delayShow={1000}
                        offset={{top: -15}}
                        className="cell-tooltip-style"/>
                </Modal>

                <ReactTooltip
                    id="celltooltip"
                    effect="solid"
                    place="top"
                    delayShow={1000}
                    offset={{top: -15}}
                    className="cell-tooltip-style"/>
            </div>
        );
    }
}

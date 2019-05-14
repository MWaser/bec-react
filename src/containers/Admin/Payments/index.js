import React from 'react';
import ReactTable from 'react-table';
import ReactTooltip from 'react-tooltip';
import '../style.css';
import {fetchTxs, linkTxs} from '../utils';
import {Button, Modal, Popconfirm} from 'antd';
import {paymentColumns, purchaseColumns} from '../sharedTableData';

export default class Payments extends React.Component {
    state = {
        payments: [],
        purchases: [],
        modalSelected: null,
        modalReview: null,
    };

    tableColumns = [...paymentColumns, {
        Header: '',
        id: 'Link',
        className: 'cell-button',
        Cell: (props) => {
            if (props.original.TxId) {
                return (
                    <Button htmlType="button" block type="primary" size="small" onClick={() => this.openReviewModal(props.original)}>
                        Review
                    </Button>
                );
            }
            else {
                return (
                    <Button htmlType="button" block size="small" onClick={() => this.openModal(props.original)}>
                        Link to Purchase
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
                    onConfirm={() => this.hideTansaction(props.original.TwId)}
                    okText="Yes"
                    cancelText="No"
                    title="Are you sure?">
                    <Button htmlType="button" block size="small">Reconcile</Button>
                </Popconfirm>
            );
        },
    }];

    modalTableColumns = [...purchaseColumns, {
        Header: '',
        id: 'Link',
        className: 'cell-button',
        width: 100,
        Cell: (props) => {
            return (
                <Popconfirm
                    onConfirm={() => this.linkTransactions(props.original.TxId, this.state.modalSelected.TwId)}
                    okText="Yes"
                    cancelText="No"
                    title="Are you sure?">
                    <Button htmlType="button" block type="primary" size="small">Link</Button>
                </Popconfirm>
            );
        },
    }];

    componentDidMount() {
        this.fetchData();
    }

    openModal = (data) => {
        this.setState({
            modalSelected: data,
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

    linkTransactions = (TxId, TwId) => {
        this.setState({
            modalSelected: null,
            modalReview: null,
        });

        linkTxs(TxId, TwId, this.props.user.email).then(() => this.fetchData());
    };

    hideTansaction = (TwId) => {
        linkTxs(undefined, TwId, this.props.user.email).then(() => this.fetchData());
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
                    data={this.state.payments}
                    columns={this.tableColumns}
                    resizable={false}
                    getTdProps={(state, row, column) => ({
                        'data-for': 'celltooltip',
                        'data-tip': (row && column.id) ? row.row[column.id] : '',
                    })}/>

                <Modal
                    visible={!!this.state.modalSelected}
                    title="Link Payment to Purchase"
                    width="90%"
                    footer={null}
                    onCancel={this.closeModal}
                    destroyOnClose>
                    <h4>Selected Payment</h4>
                    <ReactTable
                        data={[this.state.modalSelected]}
                        columns={paymentColumns}
                        minRows={1}
                        sortable={false}
                        showPagination={false}
                        resizable={false}
                        getTdProps={(state, row, column) => ({
                            'data-for': 'celltooltip',
                            'data-tip': (row && column.id) ? row.row[column.id] : '',
                        })}/>

                    <br/>
                    <h4>Purchases</h4>
                    <ReactTable
                        data={this.state.purchases}
                        columns={this.modalTableColumns}
                        resizable={false}
                        minRows={1}
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

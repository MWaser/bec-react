/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Layout, Menu, Icon, Form, Input, Button, Radio, Row, Col } from 'antd';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Wrapper from './styled';
import { withCookies } from 'react-cookie';
import Swal from 'sweetalert2';
import * as purchaseActions from 'redux/Purchase/actions';
import ReactTable from "react-table";
import axios from 'axios';
import * as _ from 'lodash';
import './style.css';

import imgLogo from '../../assets/logo.png';
import collapsedLogo from '../../assets/bec_fvicon.png';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Item } = Form;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 12 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
};

class Dashboard extends React.Component {
    state = {
        collapsed: false, menu: 'profile', legalType: '', fullName: '', currency: '', iban: '',
        address: '', city: '', state: '', zip: '', routingNumber: '', accountNumber: '', accountType: '', teststatus: '',
        disableLegalType: false, units: 0, showLogin: false, showLoading: false,
    };

    toggle = () => { this.setState({ collapsed: !this.state.collapsed }); }

    renderProfileInfo = () => {
        let user = this.state.user;
        let info = this.state.user.info;
        const columns = [{ id: 'sdate', Header: 'Status Date', accessor: d => d.Purchased.replace('T', ' ').substr(0, 19), headerStyle: { whiteSpace: 'normal' }, style: { whiteSpace: 'normal', textAlign: 'center' }, minWidth: 30 },
        { id: 'buysel', Header: 'Buyer/ Seller', accessor: d => (d.Seller === 0) ? 'BEC Ltd' : d.Seller, headerStyle: { whiteSpace: 'normal' }, style: { textAlign: 'center' }, minWidth: 20 },
        { id: 'units', Header: 'Units', accessor: 'Shares', style: { textAlign: 'center' }, minWidth: 25 },
        { id: 'uprice', Header: 'Unit Price', accessor: d => ('€' + d.PricePer), headerStyle: { whiteSpace: 'normal' }, style: { whiteSpace: 'normal', textAlign: 'center' }, minWidth: 20 },
        { id: 'total', Header: 'Total', accessor: d => ('€' + (d.Shares * d.PricePer)), style: { textAlign: 'center' }, minWidth: 30 },
        { id: 'status', Header: 'Status', accessor: 'Status', style: { whiteSpace: 'normal', textAlign: 'center' }, minWidth: 25 },
        { id: 'refno', Header: 'Reference #', accessor: d => d.RefNum.replace('-', '- '), headerStyle: { whiteSpace: 'normal' }, style: { whiteSpace: 'normal', textAlign: 'center' }, minWidth: 35 }];
        return (
            <div className="sub-container">
                <div className="item-container"><div>Name:</div><div>{user.name}</div></div>
                <div className="item-container"><div>Email:</div><div>{user.email}</div></div>
                <div className="item-container"><div>Country:</div><div>{user.country}</div></div>
                <div className="item-container"><div>Bank Info:</div><div>{user.bankInfo.status}</div></div>
                {(info.personType === 'UE') &&
                    <span><div className="item-container"><div>Organization name:</div><div>{info.ue_organization_name}</div></div>
                        <div className="item-container"><div>Your title in the organization:</div><div>{info.ue_title}</div></div></span>
                }
                {(info.personType === 'NE') &&
                    <span><div className="item-container"><div>Organization name:</div><div>{info.ne_organization_name}</div></div>
                        <div className="item-container"><div>Your title in the organization:</div><div>{info.ne_title}</div></div>
                        <div className="item-container"><div>Organization jurisdiction:</div><div>{info.ne_jurisdiction}</div></div></span>
                }
                <br /><br />
                {this.state.units > 0 &&
                    <Fragment>
                        <div className="owned-units">
                            <div className="owned-units-title">Total Units</div>
                            <div className="owned-units-number">{this.state.units}</div>
                        </div>
                        <br /><br />
                    </Fragment>
                }
                {(JSON.stringify(user.txs) !== '{}') && <ReactTable data={user.txs} columns={columns} minRows={1} showPagination={(false)} />}
            </div>
        )
    }

    renderBankInfo = () => {
        let user = this.state.user;
        const disableBI = (user.bankInfo.status === 'testing' || user.bankInfo.status === 'verified');
        return (<div>
            <Form>
                <h1>Banking Information</h1>
                <div className="note">Note: BEC Ltd. sends funds in EUR and is not responsible for any exchange or conversion rates to other currencies.</div>
                <div className="info-container">
                    <div className="check-box">
                        <RadioGroup onChange={this.handleFormInputChange('legalType')} value={this.state.legalType} disabled={this.state.disableLegalType && disableBI}>
                            <Radio value={'business'}>Business</Radio>
                            <Radio value={'personal'}>Personal</Radio>
                        </RadioGroup>
                    </div>
                    <Item label="Full Name of Account Holder" {...formItemLayout}>
                        <Input value={this.state.fullName} onChange={this.handleFormInputChange('fullName')} disabled={disableBI} />
                    </Item>
                    <div className="check-box">
                        <RadioGroup onChange={this.handleFormInputChange('currency')} value={this.state.currency} disabled={disableBI}>
                            <Radio value={'usd'}>USD</Radio>
                            <Radio value={'eur'}>EUR</Radio>
                        </RadioGroup>
                    </div>
                    {this.state.currency === 'eur' && <div>
                        <Item label="IBAN:" {...formItemLayout}>
                            <Input value={this.state.iban} onChange={this.handleFormInputChange('iban')} disabled={disableBI} />
                        </Item>
                    </div>}
                    {this.state.currency === 'usd' && <div>
                        <div className="note2">Note: USD payments are only available to US banks with ABA routing numbers.</div>
                        <Item label="Account Holder Address" {...formItemLayout}>
                            <Input value={this.state.address} placeholder="Address" className="address-input" onChange={this.handleFormInputChange('address')} disabled={disableBI} />
                            <Input value={this.state.city} placeholder="City" className="address-input" onChange={this.handleFormInputChange('city')} disabled={disableBI} />
                            <Input value={this.state.state} placeholder="State" className="address-input" onChange={this.handleFormInputChange('state')} disabled={disableBI} />
                            <Input value={this.state.zip} placeholder="Zip Code" className="address-input" onChange={this.handleFormInputChange('zip')} disabled={disableBI} />
                        </Item>
                        <Item label="Bank Information" labelCol={{ xs: { span: 24 }, sm: { span: 6 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 18 } }}>
                            <div>
                                <Item className="form-item-inline-input-label" style={{ marginBottom: 0 }} label="Routing Number" labelCol={{ xs: { span: 24 }, sm: { span: 8 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}>
                                    <Input value={this.state.routingNumber} placeholder="Routing Number" onChange={this.handleFormInputChange('routingNumber')} disabled={disableBI} />
                                </Item>
                                <Item className="form-item-inline-input-label" label="Account Number" labelCol={{ xs: { span: 24 }, sm: { span: 8 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}>
                                    <Input value={this.state.accountNumber} placeholder="Account Number" onChange={this.handleFormInputChange('accountNumber')} disabled={disableBI} />
                                </Item>
                                <Row>
                                    <Col xs={24} sm={8} />
                                    <Col xs={24} sm={16}>
                                        <div className="check-box2">
                                            <RadioGroup onChange={this.handleFormInputChange('accountType')} value={this.state.accountType} disabled={disableBI}>
                                                <Radio value={'checking'}>Checking</Radio>
                                                <Radio value={'savings'}>Savings</Radio>
                                            </RadioGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Item>
                    </div>}
                </div>
                {!disableBI && <Button type="primary" loading={this.state.loading} onClick={this.testAccount} className="test-btn">
                    Verify Account </Button>}
                <div className="help">Need Help? <a href="mailto:support@bec.ltd" target="_top">Contact Support</a></div>
            </Form>
        </div>)
    }

    goToHome = () => { this.props.history.push((window.location.pathname.startsWith("/us")) ? '/us/home' : '/nonus/home'); }
    gotAuthCode = _.once((event) => {
        this.setState({ showLoading: true });
        axios.post('/api/user/login', { JWT: event.response }).then((resp) => {
            this.init(resp.data);
            this.setState({ showLoading: false });
        });
    })

    logout = () => {
        this.props.cookies.remove('userInfo', { path: '/' });
        this.goToHome();
    }

    login = () => {
        this.setState({ showLogin: false });
        var civicSip = window.civicSip;
        civicSip.on('civic-sip-error', (error) => { console.log('civic-sip-error: ', error); this.goToHome(); });
        civicSip.on('auth-code-received', this.gotAuthCode);
        civicSip.on('user-cancelled', (event) => { console.log('user-cancelled: ', event); this.goToHome(); });
        civicSip.on('read', (event) => { });
        window.civicSip.signup({ style: 'popup', scopeRequest: window.civicSip.ScopeRequests.PROOF_OF_IDENTITY });
    }

    init = (user) => {
        if (user.status !== "signed") {
            alert('Please complete your first purchase in order to access your dashboard!');
            this.goToHome();
        }
        this.setState({ user });
        if (user.bankInfo) {
            this.setState({ legalType: user.bankInfo.legalType });
            this.setState({ fullName: user.bankInfo.fullName });
            this.setState({ currency: user.bankInfo.currency });
            this.setState({ teststatus: user.bankInfo.status });
            if (user.bankInfo.currency === 'eur') {
                this.setState({ iban: user.bankInfo.iban });
            } else {
                this.setState({ address: user.bankInfo.address });
                this.setState({ city: user.bankInfo.city });
                this.setState({ state: user.bankInfo.state });
                this.setState({ zip: user.bankInfo.zip });
                this.setState({ routingNumber: user.bankInfo.routingNumber });
                this.setState({ accountNumber: user.bankInfo.accountNumber });
                this.setState({ accountType: user.bankInfo.accountType });
            }
        }
        if (user.txs && user.txs.length) {
            this.setState({
                units: user.txs.filter(tx => tx.Status === 'sale complete').map(tx => tx.Shares).reduce((acc, tx) => acc + tx, 0)
            });
        }
        if (user.info && user.info.personType) {
            this.setState({
                disableLegalType: true,
                legalType: user.info.personType[1] === 'P' ? 'personal' : 'business'
            });
        }
        if (window.innerWidth < 575) { this.setState({ collapsed: true }) }
    }

    componentDidMount() {
        var user = this.props.cookies.get('userInfo');
        if (user.status === '') this.setState({ showLogin: true }); else this.init(user);
    }

    handleFormInputChange = field => e => {
        let value;
        value = e.target.value;
        this.setState({ [field]: value });
    }

    testAccount = e => {
        e.preventDefault();
        const { legalType, fullName, currency, iban, address, city, state, zip, routingNumber, accountNumber, accountType } = this.state;
        let user = this.state.user;
        if (!legalType) { this.showValidationError('Business/Personal is a required field!'); return; }
        if (!fullName) { this.showValidationError('Full Name is a required field!'); return; }
        if (!currency) { this.showValidationError('Currency is a required field!'); return; }
        if (currency === 'eur') {
            if (!iban) { this.showValidationError('IBAN is a required field!'); return; }
            else user.bankInfo = { legalType, fullName, currency, iban };
        }
        if (currency === 'usd') {
            if (!address) { this.showValidationError('Address is a required field!'); return; }
            if (!city) { this.showValidationError('City is a required field!'); return; }
            if (!state) { this.showValidationError('State is a required field!'); return; }
            if (!zip) { this.showValidationError('Zip Code is a required field!'); return; }
            if (!routingNumber) { this.showValidationError('Routing Number is a required field!'); return; }
            if (!accountNumber) { this.showValidationError('Account Number is a required field!'); return; }
            if (!accountType) { this.showValidationError('Account Type is a required field!'); return; }
            user.bankInfo = { legalType, fullName, currency, address, city, state, zip, routingNumber, accountNumber, accountType }
        }
        Swal.fire({
            type: 'info', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: 'Yes', cancelButtonText: 'No',
            html: '<p class="custom-alert">Remember that 20 EUR fee that was included in your first purchase? <br />To test your account, we’ll send that 20 EUR right back to you.</p>' +
                '<p class="custom-alert">If you receive it, you’ll know that dividends can be received to your banking coordinates associated with your account. <br />If you don’t receive it, you’ll need to double check your account details and run another test. </p>' +
                '<p class="custom-alert">Would you like to test your current banking coordinates now?</p>'
        }).then(result => {
            if (result.value) user.bankInfo.status = 'testing'; else user.bankInfo.status = 'saved';
            this.props.cookies.set('userInfo', user, { path: '/' });
            this.props.saveBank(user);
            this.setState({ menu: 'profile' })
            if (result.value) {
                Swal.fire({
                    type: 'success', showCloseButton: true, showCancelButton: false, focusConfirm: false, confirmButtonText: 'Ok',
                    html: '<p class="custom-alert">We’ve just sent your test transaction your way! </p>' +
                        '<p class="custom-alert">Check back here to view the status of your test. </p>' +
                        '<p class="custom-alert">We will also notify you via email when the status of your payment is updated. </p>' +
                        '<p class="custom-alert">Thank you! </p>'
                })
            }
        })
    }

    showValidationError = msg => { Swal({ title: 'Error!', text: msg, type: 'error', confirmButtonText: 'Ok' }) }

    render() {
        var site = (window.location.pathname.startsWith("/us")) ? '/us' : '/nonus';
        return (
            <Wrapper collapsed={this.state.collapsed}>
                {this.state.showLogin &&
                    <div className="modal-overlay">
                        <div className="modal-container">
                            <div>To access your dashboard, you must complete your first purchase.</div>
                            <Link className="modal-button" to={site + '/purchase'}>Buy BSD Units Now</Link>
                            <div>If you already own BSD Units, you can access your dashboard by signing in using your Civic ID below.</div>
                            <button className="modal-button" onClick={this.login}>
                                <svg className="civic-logo-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3,12 C3,16.7557705 6.8112793,21 12,21 C16.3410645,21 19.8986122,18.5324628 20.9909576,15 L24,15 C22.8386328,20.1411987 18.861084,24 12,24 C4.36572266,24 4.40760283e-16,18.8982832 0,12.0000449 C0,5.10180664 4.38793945,0 12,0 C19.0664062,0 22.8386328,3.85880133 24,9 L20.9909576,9 C19.8986122,5.46744739 16.6115723,3 12,3 C6.49707031,3 3,7.24413967 3,12 Z M12,8 C13.6569,8 15,9.28596049 15,10.872371 C15,12.006383 13.9967,12.9866275 13,13.4535793 L13,17 L11,17 L11,13.4535793 C10.0032,12.9866275 9,12.006383 9,10.872371 C9,9.28596049 10.3432,8 12,8 Z" fill="#FFFFFF" />
                                </svg> Log-in with Civic
                        </button>
                            <div className="back-link"><Link to={site + '/home'}><Icon type="left" />Back</Link></div>
                        </div>
                    </div>
                }
                <Layout>
                    <Helmet title="Dashboard" />
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
                        <div className="logo"><Link to={site + '/home'}><img src={this.state.collapsed ? collapsedLogo : imgLogo} alt="BEC LTD." /></Link></div>
                        <Menu theme="dark" mode="inline" selectedKeys={[this.state.menu]}>
                            <Menu.Item key="bank" onClick={() => this.setState({ menu: 'bank' })}><Icon type="bank" /><span>Banking Information</span></Menu.Item>
                            <Menu.Item key="profile" onClick={() => this.setState({ menu: 'profile' })}><Icon type="user" /><span>Profile</span></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
                            {this.state.user && <div className="header-user">{this.state.user.name} &nbsp; <a onClick={this.logout}>Log Out</a></div>}
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }} >
                            {this.state.showLoading && <div className="lds-ellipsis"><div /><div /><div /><div /></div>}
                            {this.state.user && <div className="dashboard">
                                {this.state.menu === 'profile' && this.renderProfileInfo()}
                                {this.state.menu === 'bank' && this.renderBankInfo()}
                            </div>}
                        </Content>
                    </Layout>
                </Layout>
            </Wrapper>
        );
    }
}

export default connect(state => ({ user: state.purchaseReducer.user, loading: state.purchaseReducer.loading }),
    { ...purchaseActions })(withCookies(Form.create()(Dashboard)));

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Helmet from 'react-helmet';
import { Button, Form, Icon } from 'antd';
import Wrapper from './styled';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import * as purchaseActions from 'redux/Purchase/actions';
import * as _ from 'lodash';

const { Item } = Form;

class Civic extends React.Component {

    state = { loading: false };

    login = e => {
        e.preventDefault();
        window.civicSip.signup({ style: 'popup', scopeRequest: window.civicSip.ScopeRequests.PROOF_OF_IDENTITY });
    }

    doCivic = _.once(e => this.props.civic(e));

    gotAuthCode = (event) => { this.doCivic(event); this.props.changeStep(); }
    mockCivic = () => { this.props.mockLogin(); this.props.changeStep(); }

    componentDidMount() {
        var civicSip = window.civicSip;
        civicSip.on('civic-sip-error', function (error) { console.log('civic-sip-error: ', error) });
        civicSip.on('auth-code-received', this.gotAuthCode);
        civicSip.on('user-cancelled', function (event) { console.log('user-cancelled: ', event); });
        civicSip.on('read', function (event) { });
    }

    render() {
        const { loading } = this.state;
        const env = this.props.cookies.get('env');
        return (
            <Wrapper className="container">
                <Helmet title="Log in" />
                <Form className="shadow1">
                    <div className="form-explain">
                        <div>Know Your Customer (KYC) regulations require us to verify your identity.  Therefore, to participate in the BSD Unit Sale, you’ll need to verify your identity and login using the Civic mobile app.</div>
                    </div>
                    <Item className="civic-cont">
                        <a className="civic-button" target="_blank" href="https://www.civic.com/app/" rel="noopener noreferrer">
                            <svg className="civic-logo-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3,12 C3,16.7557705 6.8112793,21 12,21 C16.3410645,21 19.8986122,18.5324628 20.9909576,15 L24,15 C22.8386328,20.1411987 18.861084,24 12,24 C4.36572266,24 4.40760283e-16,18.8982832 0,12.0000449 C0,5.10180664 4.38793945,0 12,0 C19.0664062,0 22.8386328,3.85880133 24,9 L20.9909576,9 C19.8986122,5.46744739 16.6115723,3 12,3 C6.49707031,3 3,7.24413967 3,12 Z M12,8 C13.6569,8 15,9.28596049 15,10.872371 C15,12.006383 13.9967,12.9866275 13,13.4535793 L13,17 L11,17 L11,13.4535793 C10.0032,12.9866275 9,12.006383 9,10.872371 C9,9.28596049 10.3432,8 12,8 Z" fill="#FFFFFF" />
                            </svg> Download Civic App</a>
                    </Item>
                    <div className="form-explain">When you’re ready to begin registration, please log in below.</div>
                    <Item className="civic-cont">
                        <a className="civic-button" href="#" onClick={this.login}>
                            <svg className="civic-logo-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3,12 C3,16.7557705 6.8112793,21 12,21 C16.3410645,21 19.8986122,18.5324628 20.9909576,15 L24,15 C22.8386328,20.1411987 18.861084,24 12,24 C4.36572266,24 4.40760283e-16,18.8982832 0,12.0000449 C0,5.10180664 4.38793945,0 12,0 C19.0664062,0 22.8386328,3.85880133 24,9 L20.9909576,9 C19.8986122,5.46744739 16.6115723,3 12,3 C6.49707031,3 3,7.24413967 3,12 Z M12,8 C13.6569,8 15,9.28596049 15,10.872371 C15,12.006383 13.9967,12.9866275 13,13.4535793 L13,17 L11,17 L11,13.4535793 C10.0032,12.9866275 9,12.006383 9,10.872371 C9,9.28596049 10.3432,8 12,8 Z" fill="#FFFFFF" />
                            </svg> Verify/Log-in with Civic</a>
                    </Item>
                    {env === 'dev' && <Item><Button type="default" className="back-btn" loading={loading} onClick={this.mockCivic}>Mock Flow (for DEV testing only)</Button></Item>}
                    <div className="change-link" onClick={() => this.props.goToHome()}><a><Icon type="left" />Back</a></div>
                </Form>
            </Wrapper>
        );
    }
}

export default connect(state => ({
    user: state.purchaseReducer.user,
    loading: state.purchaseReducer.loading
}), { ...purchaseActions })(withCookies(Civic));

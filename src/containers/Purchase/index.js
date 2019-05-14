/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Header } from 'components';
import Wrapper from './styled';
import { withCookies } from 'react-cookie';
import { Steps, Spin } from 'antd';
import Civic from './00-Civic';
import ToS from './01-ToS';
import GetInfo from './02-GetInfo';
import Sign from './03-Sign';
import GetInstrs from './04-GetInstrs';
import * as purchaseActions from 'redux/Purchase/actions';
import axios from 'axios';

const Step = Steps.Step;

class Purchase extends React.Component {
    state = {
        step: 0
    };

    changeStep = step => { this.setState({ step }); }
    goToHome = () => { this.props.history.push((window.location.pathname.startsWith("/us")) ? '/us/home' : '/nonus/home'); }
    logAdd = (severity, message) => { axios.post('/api/log/add', { app: 'BEC Purchase', severity: severity, message: message }); };
    saveCookie = user => { this.props.cookies.set('userInfo', user, { path: '/', maxAge: 1800000 }); }
    jumpTo = (user, step) => { this.setState({ step }); }                               // can be extended for debugging purposes
    logout = () => { this.props.cookies.remove('userInfo', { path: '/' }); this.goToHome(); }

    componentDidMount() {
        var gUser = this.props.cookies.get('userInfo');
        gUser.site = (window.location.pathname.startsWith("/us")) ? 'us' : 'nonus';
        if (this.props.location.search.startsWith("?nospoof")) {
            var x = this.props.location.search;
            var result = x.substr(x.indexOf('event') + 6, 200);
            if (result === 'signing_complete') {
                this.logAdd(3, gUser.email + ' signed');
                gUser.status = 'signed';
                this.saveCookie(gUser);
                this.props.saveUser(gUser);
            } else if (result === 'decline') {
                this.logAdd(3, gUser.email + ' declined to sign');
                alert("You can always change your mind and sign.");
                gUser.status = 'kycDone';
                this.props.saveUser(gUser);
            } else {
                this.logAdd(3, gUser.email + ' will sign later');
                alert("Docusign reported " + result + ".  You may always come back and sign later.");
                this.props.setUser(gUser);
            }
        }
        this.props.setUser(gUser);
    }

    render() {
        const { user } = this.props;
        if ((user && user.status === '') || !user) { if (this.state.step !== 0) { this.changeStep(0); } }
        else if (user && user.status === 'registered') { if (this.state.step !== 1) { this.jumpTo(user, 1); } }
        else if (user && user.status === 'tosOk') { if (this.state.step !== 2) { this.jumpTo(user, 2); } }
        else if (user && user.status === 'infoDone') { if (this.state.step !== 3) { this.jumpTo(user, 3); } }
        else if (user && user.status === 'signed') { if (this.state.step !== 4) { this.jumpTo(user, 4); } }

        const { step } = this.state;
        return (
            <div className="wapper">
                <Helmet title="Purchase" />
                <Header site={(window.location.pathname.startsWith("/us")) ? 'us' : 'nonus'} />
                {!(user === null || user.status === '') &&
                    <div className="header-user2">{user.name} &nbsp; <a onClick={this.logout}>Log Out</a></div>
                }
                <Wrapper className="container">
                    <h2>Purchase</h2>
                    <Steps current={this.state.step}>
                        <Step title="Login & Verify" />
                        <Step title="Terms of Service" />
                        <Step title="Enter Information" />
                        <Step title="Sign Agreement" />
                        <Step title="Get Payment Instructions" />
                    </Steps>
                    {this.props.loading ?
                        <div className="spinner"><Spin size="large" tip={this.props.loading} /></div> : <div />
                    }
                    {step === 0 && !this.props.loading &&
                        <Civic changeStep={this.changeStep} goToHome={this.goToHome} />
                    }
                    {step === 1 && !this.props.loading &&
                        <ToS changeStep={this.changeStep} goToHome={this.logout} />
                    }
                    {step === 2 && !this.props.loading &&
                        <GetInfo changeStep={this.changeStep} />
                    }
                    {step === 3 && !this.props.loading &&
                        <Sign changeStep={this.changeStep} saveCookie={this.saveCookie} />
                    }
                    {step === 4 && !this.props.loading &&
                        <GetInstrs changeStep={this.changeStep} goToHome={this.goToHome} />
                    }
                </Wrapper>
            </div>
        );
    }
}

export default connect(state => ({ user: state.purchaseReducer.user, loading: state.purchaseReducer.loading }),
    { ...purchaseActions })(withCookies(Purchase));

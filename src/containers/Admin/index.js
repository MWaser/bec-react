import React from 'react';
import {Layout, Menu} from "antd";
import {Switch, Route, Redirect, Link} from "react-router-dom";
import Payments from "./Payments";
import imgLogo from '../../assets/logo.png';
import Purchases from './Purchases';
import {withCookies} from 'react-cookie';
import {compose} from 'redux';
import * as _ from 'lodash';
import axios from 'axios';
import {connect} from 'react-redux';

class Admin extends React.Component {
    static getDerivedStateFromProps (props) {
        return {
            activeMenuItem: props.match.params.page
        }
    }

    state = {
        activeMenuItem: 'payments',
        user: null,
    };

    componentDidMount() {
        const user = this.props.cookies.get('userInfo');

        if (user) {
            return this.initUser(user);
        }

        const civicSip = window.civicSip;
        civicSip.on('civic-sip-error', () => { this.props.history.push('/'); });
        civicSip.on('auth-code-received', this.gotAuthCode);
        civicSip.on('user-cancelled', () => { this.props.history.push('/'); });
        civicSip.on('read', (event) => { });
        civicSip.signup({ style: 'popup', scopeRequest: window.civicSip.ScopeRequests.PROOF_OF_IDENTITY });
    }

    initUser = (user) => {
        if (!user.admin) {
            alert('You are not allower to open this page!');
            this.props.history.push('/');
            return;
        }

        this.setState({ user });
    };

    gotAuthCode = _.once((event) => {
        axios.post('/api/user/login', { JWT: event.response }).then((resp) => {
            this.initUser(resp.data);
        });
    });

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout.Header>
                    <Link to="/"><img src={imgLogo} className="img-responsive" style={{ marginTop: 7 }} alt="" /></Link>
                </Layout.Header>
                <Layout>
                    <Layout.Sider theme="light">
                        <Menu
                            mode="vertical"
                            style={{ lineHeight: '64px' }}
                            selectedKeys={[this.state.activeMenuItem]}
                            onSelect={({key}) => this.props.history.push(`/admin/${key}`)}>
                            <Menu.ItemGroup title="Incoming TX">
                                <Menu.Item key="payments">Payments</Menu.Item>
                                <Menu.Item key="purchases">Purchases</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Outgoing TX">
                                <Menu.Item key="verifications">Account Verifications</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu>
                    </Layout.Sider>
                    <Layout.Content style={{padding: 24}}>
                        {this.state.user && (
                            <Switch>
                                <Redirect from="/admin" exact to="/admin/payments"/>
                                <Route
                                    path="/admin/payments"
                                    render={props => <Payments {...props} user={this.state.user}/>}/>
                                <Route
                                    path="/admin/purchases"
                                    render={props => <Purchases {...props} user={this.state.user}/>}/>
                            </Switch>
                        )}
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default compose(connect(), withCookies)(Admin);

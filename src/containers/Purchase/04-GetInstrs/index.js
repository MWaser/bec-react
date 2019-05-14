import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Form, Button, Card } from 'antd';
import Wrapper from './styled';
import * as purchaseActions from 'redux/Purchase/actions';

class GetInstrs extends React.Component {
    state = { loading: false };

    goBack = () => {
        const { user } = this.props;
        user.status = "reset";
        this.props.saveUser(user);
        this.props.goToHome();
    }

    render() {
        const env = this.props.cookies.get('env');
        const { user } = this.props;
        if (user.status === "") return (null);
        return (
            <Wrapper className="container">
                <Form className="shadow1">
                    <h1>Payment Instructions</h1>
                    <Card className="term-container">
                        <div className="payment-container">
                            <div>
                                <p className="justified">Thank you for signing the BSD Unit Sale Agreement for the purchase of {user.info.unit_amount} units for {user.info.euro_amount} EUR.</p>
                                <p className="justified">An additional 20 EUR fee is required that will be returned to you as a means of confirming the accuracy of the banking coordinates we receive with your inbound payment.&nbsp;  You will always have the opportunity to update this information whenever you so choose.</p>
                                <p className="justified">BEC Ltd. recommends using <a href="https://transferwise.com/a/marcoa417">Transferwise</a> for quick bank transfers with minimal fees.&nbsp; Funds can be sent via traditional bank wire, but may be subject to transfer fees and/or currency fluctuations or conversion fees.</p>
                                <p className="justified">Once your payment has been received, you'll receive a confirmation and will be able to view your units in your dashboard profile.</p>
                            </div>
                            <div>
                                <h4>Bank Information</h4>
                                Please use the following information to send a total of {user.info.euro_amount + 20} EUR.<br />
                                Please do NOT forget to include your reference number!<br />
                                <div className="info-item"><div>Account Holder</div><div>BEC LTD</div></div>
                                <div className="info-item"><div>Bank code (SWIFT/BIC)</div><div>DEKTDE7GXXX</div></div>
                                <div className="info-item"><div>IBAN</div><div>DE76 7001 1110 6054 2825 06</div></div>
                                <div className="info-item"><div>Email Address</div><div>marco.aniballi@bec.ltd</div></div>
                                <div className="info-item">
                                    <div>Address</div>
                                    <div><div>Handelsbank</div><div>Elsenheimer Str. 41</div><div>80687 Munchen, Germany</div></div>
                                </div>
                                <div className="info-item">
                                    <div>Reference Number</div><div>{user.envelopeId.substr(24)}-{user.info.unit_amount}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className="btn-container">
                        <Button type="primary" className="back-btn" onClick={() => { this.props.goToHome(); }}>OK</Button>
                        {env !== 'prod' &&
                            <Button type="default" className="back-btn" onClick={this.goBack}>Start Over (demo only)</Button>
                        }
                    </div>
                </Form>
            </Wrapper>
        );
    }
}

export default connect(state => ({
    user: state.purchaseReducer.user,
    loading: state.purchaseReducer.loading
}), {
        ...purchaseActions
    })(withCookies(GetInstrs));

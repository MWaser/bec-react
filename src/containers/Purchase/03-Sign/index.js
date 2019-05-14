import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Icon } from 'antd';
import Wrapper from './styled';
import * as purchaseActions from 'redux/Purchase/actions';

const { Item } = Form;

class EnterAmt extends React.Component {
    state = {
        loading: false
    };

    continue = e => {
        e.preventDefault();
        const { user } = this.props;
        this.props.saveCookie(user);
        user.site = (window.location.pathname.startsWith("/us")) ? 'us' : 'nonus';
        this.props.getSignURL(user);
    }

    goBack = () => {
        const { user } = this.props;
        user.status = "tosOk";
        this.props.setUser(user);
        this.props.changeStep();
    }

    render() {
        const { loading } = this.state;

        return (
            <Wrapper className="container">
                <Form className="shadow1">
                    <h1>Sign</h1>
                    <label>Please click the button below to begin the document signing process.
                        </label>
                    <Item>
                        <Button type="primary" htmlType="submit" loading={loading} onClick={this.continue}>
                            Start Signing
                        </Button>
                    </Item>

                    <Item>
                        <Button type="default" className="back-btn" onClick={this.goBack}>
                            <Icon type="left" />Go back to re-enter information
                        </Button>
                    </Item>
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
    })(Form.create()(EnterAmt));

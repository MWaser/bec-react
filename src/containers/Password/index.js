import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { Header } from 'components';

import Wrapper from './styled';

const { Item } = Form;

class PasswordForm extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.refPassword.focus();
  }

  setPassword = e => {
    e.preventDefault();

    const { form } = this.props;

    form.validateFieldsAndScroll({ scroll: { offsetTop: 70 } }, (err, values) => {
      if (err) return;

      this.setState({ loading: true });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;

    return (
      <Wrapper className="container">
        <Helmet title="Create account" />
        <Header />
        <Form onSubmit={this.setPassword} className="shadow1">
          <h1>Password</h1>

          <label>Password</label>
          <Item>
            {getFieldDecorator('password1', {
              rules: [
                { required: true, message: 'Please input your password!' },
                { whitespace: true, message: 'This field may not be blank.' }
              ]
            })(<Input type="password" ref={ref => { this.refPassword = ref;}}/>)}
          </Item>

          <label>Confirm Password</label>
          <Item>
            {getFieldDecorator('password2', {
              rules: [
                { required: true, message: 'Please confirm your password!' },
                { whitespace: true, message: 'This field may not be blank.' }
              ]
            })(<Input type="password" />)}
          </Item>

          <Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Change Password
            </Button>
          </Item>
        </Form>

        <div className="change-link">
          Already registered? <Link to="/signin">Sign in</Link>
        </div>
      </Wrapper>
    );
  }
}

export default connect(null, null)(Form.create()(PasswordForm));

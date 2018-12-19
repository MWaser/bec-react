import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Header } from 'components';
import Wrapper from './styled';

const { Item } = Form;

class LoginForm extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.refEmail.focus();
  }

  signin = e => {
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
        <Helmet title="Sign in" />
        <Header />
        <Form onSubmit={this.signin} className="shadow1">
          <h1>Sign in</h1>

          <label>Email</label>
          <Item>
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'The input is not valid email!' },
                { required: true, message: 'Please input your email!' }
              ]
            })(
              <Input
                type="email"
                ref={ref => {
                  this.refEmail = ref;
                }}
              />
            )}
          </Item>

          <label>Password</label>
          <Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your password!' },
                { whitespace: true, message: 'This field may not be blank.' }
              ]
            })(<Input type="password" />)}
          </Item>

          <Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Sign in
            </Button>
          </Item>
        </Form>
      </Wrapper>
    );
  }
}

export default connect(null, null)(Form.create()(LoginForm));

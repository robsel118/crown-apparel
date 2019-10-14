import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { register } from '../../api/auth';
import { storeUser } from '../../storage/authHandler';

import './sign-up.styles.sass';

class _SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span className="sub-title">Create a new account</span>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                { required: true, message: 'Please input your email!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>

          <Button block type="primary">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

const SignUp = Form.create({ name: 'sign_in' })(_SignUp);

export default SignUp;

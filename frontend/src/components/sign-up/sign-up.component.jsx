import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.sass';

class _SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err);
      const { displayName, email, password } = values;
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({ displayName: '', email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
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
            {getFieldDecorator('displayName', {
              rules: [
                { required: true, message: 'Please input your displayName!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="displayName"
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
              />
            )}
          </Form.Item>

          <Button block type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

const SignUp = Form.create({ name: 'sign_in' })(_SignUp);

export default SignUp;

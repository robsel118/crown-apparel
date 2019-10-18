import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './sign-in.styles.sass';

class _SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { email, password } = values;

        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-in">
        <h2 className="title"> I already have an account </h2>{' '}
        <span className="sub-title">
          {' '}
          Sign in with your email and password{' '}
        </span>{' '}
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {' '}
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon
                    type="mail"
                    style={{
                      color: 'rgba(0,0,0,.25)'
                    }}
                  />
                }
                placeholder="email"
              />
            )}{' '}
          </Form.Item>{' '}
          <Form.Item>
            {' '}
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{
                      color: 'rgba(0,0,0,.25)'
                    }}
                  />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Button block type="primary" htmlType="submit">
            Sign In
          </Button>
          <br />
          <br />
          <Button block type="normal" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </Form>
      </div>
    );
  }
}

const SignIn = Form.create({
  name: 'sign_in'
})(_SignIn);

export default SignIn;
import React, { Component } from 'react';
import { Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { loginUser } from '../../redux/Auth/auth.actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  openSuccessNotification = (description, placement) => {
    notification.success({
      message: 'You are now Logged In',
      description,
      placement,
    });
  };

  openErrorNotification = (description, placement) => {
    notification.error({
      message: "Couldn't Login",
      description,
      placement,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //   need validation here
    const { email, password } = this.state;
    const { loginUser: loginUserRequest } = this.props;
    loginUserRequest(email, password)
      .then(() => {
        this.openSuccessNotification('Welcome!', 'topLeft');
      })
      .catch((err) => {
        this.openErrorNotification(err, 'topLeft');
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormItemWrapper label="Email">
          <Input
            placeholder="Enter Email"
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            required
          />
        </FormItemWrapper>
        <FormItemWrapper label="Password">
          <Input.Password
            placeholder="Enter Password"
            value={password}
            name="password"
            onChange={this.handleChange}
            required
          />
        </FormItemWrapper>

        <br />

        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
        <small>
          New User? <Link to="/register">SignUp</Link>
        </small>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

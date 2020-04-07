import React, { Component } from 'react';
import { Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import styles from './RegisterForm.module.css';
import { registerUser } from '../../redux/Auth/auth.actions';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  openErrorNotification = (description, placement) => {
    notification.error({
      message: "Couldn't Register User",
      description,
      placement,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // validate before sending
    const { name, email, password } = this.state;
    // post data for registration
    const { registerUser: registerUserRequest } = this.props;
    registerUserRequest(name, email, password)
      .then((res) => {
        console.log('resolved', res);
      })
      .catch((err) => {
        // console.log('not resolved', err);
        this.openErrorNotification(err, 'topLeft');
      });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormItemWrapper label="Full Name">
          <Input
            placeholder="Enter Full Name"
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </FormItemWrapper>
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
          Sign Up
        </Button>
        <small className={styles.loginlink}>
          Already have an account, <Link to="/login">SignIn</Link>
        </small>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (name, email, password) =>
    dispatch(registerUser(name, email, password)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);

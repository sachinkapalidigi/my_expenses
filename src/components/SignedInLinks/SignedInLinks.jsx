import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/Auth/auth.actions';
import styles from './SignedInLinks.module.css';

const SignedInLinks = (props) => {
  const { logoutUser: logout } = props;
  return (
    <Menu.Item className={styles.logoutButton} onClick={logout} key="signedin1">
      Logout
    </Menu.Item>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);

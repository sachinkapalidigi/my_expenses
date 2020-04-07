import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import styles from './SignedOutLinks.module.css';

const SignedOutLinks = () => {
  return (
    <>
      <Row justify="start" align="middle">
        <Col md={10} lg={6}>
          <NavLink
            activeClassName={styles.SelectedNavlink}
            className={styles.SignedOutLinksNavlink}
            to="/register"
          >
            Register
          </NavLink>
        </Col>
        <Col md={10} lg={6}>
          <NavLink
            activeClassName={styles.SelectedNavlink}
            className={styles.SignedOutLinksNavlink}
            to="/login"
          >
            Login
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default SignedOutLinks;

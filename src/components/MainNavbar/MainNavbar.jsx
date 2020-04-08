import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

import { connect } from 'react-redux';
import styles from './MainNavbar.module.css';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';

const { Header } = Layout;

const MainNavbar = (props) => {
  const { token } = props;
  return (
    <Header className="header">
      <Row justify="space-between">
        <Col xs={0} sm={0} md={4}>
          <div className={styles.logo} />
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
              justifyContent: 'flex-end',
              maxHeight: '90%',
              textAlign: 'center',
            }}
          >
            {token ? <SignedInLinks /> : <SignedOutLinks />}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = ({ auth: { token } }) => ({
  token,
});

export default connect(mapStateToProps)(MainNavbar);

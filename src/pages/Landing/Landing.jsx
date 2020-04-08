import React from 'react';
import { Row, Col, Layout } from 'antd';
import img from '../../assets/images/landingpage.jpg';

import styles from './Landing.module.css';

const { Footer } = Layout;

const LandingPage = () => {
  return (
    <Layout className={styles.wrapper}>
      <div className={styles.content}>
        <Row justify="center">
          <Col xs={24} sm={24} md={16} lg={16} xl={12}>
            <h2 style={{ textAlign: 'center' }}>Manage Your Expenses Here!</h2>
            <img
              style={{ width: '100%', height: '100%' }}
              src={img}
              alt="Manage your expenses"
            />
          </Col>
        </Row>
        <div className="push" />
      </div>
      <Footer className={styles.footer}>
        Expense Tracker ©2020 Created by Sachin C V
      </Footer>
    </Layout>
  );
};

export default LandingPage;

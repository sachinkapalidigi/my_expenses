import React from 'react';
import { Row, Col } from 'antd';
import img from '../../assets/images/landingpage.jpg';

const LandingPage = () => {
  return (
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
  );
};

export default LandingPage;

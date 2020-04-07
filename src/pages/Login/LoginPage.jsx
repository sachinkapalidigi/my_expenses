import React from 'react';
import { Row, Col, Card } from 'antd';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div
      style={{
        paddingTop: '50px',
        minHeight: '100vh',
      }}
    >
      <Row justify="center" align="top">
        <Col xs={24} sm={16} md={16} lg={10} xl={8}>
          <Card
            hoverable
            title="Sign In"
            bordered={false}
            style={{ width: '100%' }}
          >
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;

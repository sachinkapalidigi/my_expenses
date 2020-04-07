import React from 'react';
import { Row, Col, Card } from 'antd';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div
      style={{
        paddingTop: '50px',
        minHeight: '100vh',
      }}
    >
      <Row justify="center" align="top">
        <Col xs={24} sm={16} md={20} lg={16} xl={10}>
          <Card
            hoverable
            title="Sign Up"
            bordered={false}
            style={{ width: '100%' }}
          >
            <RegisterForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;

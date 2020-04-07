import React from 'react';
import { Row, Col } from 'antd';

const FormItemWrapper = (props) => {
  const { label, children } = props;
  return (
    <Row gutter={[8, 8]} align="middle" justify="start">
      <Col xs={12} sm={8} md={8} lg={6}>
        {label} :
      </Col>
      <Col xs={24} sm={18} md={18} lg={16}>
        {children}
      </Col>
    </Row>
  );
};

export default FormItemWrapper;

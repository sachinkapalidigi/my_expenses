import React from 'react';
import { Row, Col, Card } from 'antd';

import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import AddCategory from '../../../components/AddCategory/AddCategory';
import CategoriesList from '../../../components/CategoriesList/CategoriesList';

const Categories = () => {
  return (
    <ContentWrapper title="Categories">
      <Row justify="space-around">
        <Col xs={24} sm={24} md={16} lg={12}>
          <Card
            hoverable
            title="Add Category"
            bordered={false}
            style={{ width: '100%' }}
          >
            <AddCategory />
          </Card>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={24} sm={24} md={16} lg={12}>
          <CategoriesList />
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default Categories;

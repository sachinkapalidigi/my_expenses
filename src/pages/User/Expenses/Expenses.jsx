import React from 'react';
import { Row, Col, Card } from 'antd';

import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import AddExpense from '../../../components/AddExpense/AddExpense';
import ExpensesList from '../../../components/ExpensesList/ExpensesList';

const Expenses = () => {
  return (
    <ContentWrapper title="Expenses">
      <Row justify="space-around">
        <Col xs={24} sm={24} md={16} lg={12}>
          <Card
            hoverable
            title="Add Expense"
            bordered={false}
            style={{ width: '100%' }}
          >
            <AddExpense />
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="space-around">
        <Col xs={24} sm={24} md={20} lg={16}>
          <ExpensesList />
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default Expenses;

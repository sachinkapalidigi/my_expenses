import React, { Component } from 'react';
import { Row, Col, Select, DatePicker, Button, Table } from 'antd';

import { connect } from 'react-redux';
import { getExpenses } from '../../redux/Expenses/expense.actions';

const { Option } = Select;

// const dateFormat = 'YYYY/MM/DD';

const columns = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Payment Mode',
    dataIndex: 'payment_mode',
    key: 'payment_mode',
  },
  {
    title: 'Category',
    dataIndex: 'category_name',
    key: 'category_name',
  },
];

class ExpensesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      categoryId: '',
      fromString: '',
      toString: '',
    };
  }

  componentDidMount() {
    const { getExpenses: getExpensesRequest } = this.props;
    const { categoryId, from, to } = this.state;
    getExpensesRequest(categoryId, from, to);
  }

  handleSelectChange = (value) => {
    this.setState({
      categoryId: value,
    });
  };

  handleToChange = (date, dateString) => {
    this.setState({ to: date, toString: dateString });
  };

  handleFromChange = (date, dateString) => {
    this.setState({ from: date, fromString: dateString });
  };

  handleSearch = () => {
    const { getExpenses: getExpensesRequest } = this.props;
    const { categoryId, fromString, toString } = this.state;
    getExpensesRequest(categoryId, fromString, toString)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        this.setState({
          from: '',
          to: '',
          categoryId: '',
          fromString: '',
          toString: '',
        });
      });
  };

  render() {
    const { categories, expenses } = this.props;
    const { categoryId, from, to } = this.state;
    return (
      <div>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={16} sm={16} md={4} lg={4}>
            <Select
              name="categoryId"
              value={categoryId}
              style={{ width: '100%' }}
              onChange={this.handleSelectChange}
              defaultValue="all"
            >
              <Option key="allcategories" value="all">
                All
              </Option>
              {categories.map((c) => (
                <Option key={`category${c.id}`} value={c.id}>
                  {c.category_name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={16} sm={16} md={6} lg={6}>
            <DatePicker value={from} onChange={this.handleFromChange} />
          </Col>
          <Col xs={16} sm={16} md={6} lg={6}>
            <DatePicker value={to} onChange={this.handleToChange} />
          </Col>
          <Col xs={16} sm={16} md={6} lg={6}>
            <Button type="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={expenses} />
      </div>
    );
  }
}

const mapStateToProps = ({
  categories: { categories },
  expenses: { expenses },
}) => ({
  categories,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (categoryId, from, to) =>
    dispatch(getExpenses(categoryId, from, to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);

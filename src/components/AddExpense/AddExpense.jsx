import React, { Component } from 'react';

import { Input, Select, Button } from 'antd';

import { connect } from 'react-redux';
import { getCategories } from '../../redux/Categories/categories.actions';
import { addExpense } from '../../redux/Expenses/expense.actions';

import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';

const { Option } = Select;

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      categoryId: '',
      paymentMode: '',
      description: '',
    };
  }

  componentDidMount() {
    const { categories, getCategories: getCategoriesRequest } = this.props;
    if (!categories.length) {
      getCategoriesRequest();
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'amount') {
      if (!Number(event.target.value)) {
        return;
      }
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelectChange = (value) => {
    this.setState({
      categoryId: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { addExpense: addExpenseRequest } = this.props;
    const { amount, categoryId, paymentMode, description } = this.state;
    //   unhandled promise
    addExpenseRequest(amount, paymentMode, categoryId, description);
  };

  render() {
    const { amount, categoryId, description, paymentMode } = this.state;
    const { categories } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormItemWrapper label="Amount(Rs)">
            <Input name="amount" onChange={this.handleChange} value={amount} />
          </FormItemWrapper>
          <FormItemWrapper label="Payment Mode">
            <Input
              name="paymentMode"
              onChange={this.handleChange}
              value={paymentMode}
            />
          </FormItemWrapper>
          <FormItemWrapper label="Categories">
            <Select
              name="categoryId"
              value={categoryId}
              style={{ width: '100%' }}
              onChange={this.handleSelectChange}
            >
              {categories.map((c) => (
                <Option key={`category${c.id}`} value={c.id}>
                  {c.category_name}
                </Option>
              ))}
            </Select>
          </FormItemWrapper>
          <FormItemWrapper label="Description">
            <Input.TextArea
              placeholder="description..."
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </FormItemWrapper>
          <br />

          <Button type="primary" htmlType="submit" block>
            Add Expense
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ categories: { categories } }) => ({
  categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  addExpense: (amount, paymentMode, categoryId, description) =>
    dispatch(addExpense(amount, paymentMode, categoryId, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);

import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { addCategory } from '../../redux/Categories/categories.actions';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      description: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { categoryName, description } = this.state;
    const { addCategory: addCategoryRequest } = this.props;
    addCategoryRequest(categoryName, description)
      .then(() => {
        this.setState({ categoryName: '', description: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { categoryName, description } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormItemWrapper label="Category">
            <Input
              placeholder="Category Name"
              value={categoryName}
              name="categoryName"
              onChange={this.handleChange}
            />
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
            Add Category
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCategory: (categoryName, description) =>
    dispatch(addCategory(categoryName, description)),
});

export default connect(null, mapDispatchToProps)(AddCategory);

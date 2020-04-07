import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/Categories/categories.actions';

const columns = [
  {
    title: 'Category',
    dataIndex: 'category_name',
    key: 'category_name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

class CategoriesList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { getCategories: getCategoriesRequest } = this.props;
    getCategoriesRequest()
      .then(() => {
        console.log('successfull');
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { categories } = this.props;
    return <Table columns={columns} dataSource={categories} />;
  }
}

const mapStateToProps = ({ categories: { categories } }) => ({
  categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

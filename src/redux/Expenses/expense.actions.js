import actionTypes from './expense.types';

import { authInstance } from '../../axios-custom';

export const addExpense = (amount, paymentMode, categoryId, description) => (
  dispatch
) => {
  dispatch({ type: actionTypes.ADD_EXPENSE_REQUEST });
  const axios = authInstance();
  return new Promise((resolve, reject) => {
    return axios
      .post('/expenses', {
        amount,
        payment_mode: paymentMode,
        category_id: Number(categoryId),
        description,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: actionTypes.ADD_EXPENSE_SUCCESSFULL,
          payload: res.data,
        });
        resolve();
      })
      .catch((err) => {
        let message = 'Could not Login user';
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        dispatch({ type: actionTypes.SET_ERROR, payload: message });
        reject(message);
      });
  });
};

export const getExpenses = (categoryId = 'all', from = '', to = '') => (
  dispatch
) => {
  dispatch({ type: actionTypes.GET_EXPENSES_REQUEST });
  const axios = authInstance();
  return new Promise((resolve, reject) => {
    return axios
      .get(`/expenses?category_id=${categoryId}&from=${from}&to=${to}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: actionTypes.GET_EXPENSES_SUCCESSFULL,
          payload: res.data,
        });
        resolve();
      })
      .catch((err) => {
        let message = 'Could not Login user';
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        dispatch({ type: actionTypes.SET_ERROR, payload: message });
        reject(message);
      });
  });
};

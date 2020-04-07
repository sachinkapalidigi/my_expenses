import actionTypes from './categories.types';
import { authInstance } from '../../axios-custom';

export const addCategory = (categoryName, description) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_CATEGORY_REQUEST });
  const axios = authInstance();
  return new Promise((resolve, reject) => {
    return axios
      .post('/categories', { category_name: categoryName, description })
      .then((res) => {
        dispatch({
          type: actionTypes.ADD_CATEGORY_SUCCESSFULL,
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

export const getCategories = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST });
  const axios = authInstance();
  return new Promise((resolve, reject) => {
    return axios
      .get('/categories')
      .then((res) => {
        dispatch({
          type: actionTypes.GET_CATEGORIES_SUCCESSFULL,
          payload: res.data.categories,
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

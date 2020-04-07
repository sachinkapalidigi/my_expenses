import authActionTypes from './auth.types';
import axios from '../../axios-custom';

export const registerUser = (name, email, password) => (dispatch) => {
  dispatch({ type: authActionTypes.SIGNUP_REQUEST });
  return new Promise((resolve, reject) => {
    return axios
      .post('/register', { name, email, password })
      .then((res) => {
        dispatch({
          type: authActionTypes.SIGNUP_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        resolve(res.data.message);
      })
      .catch((err) => {
        console.log(err.response);
        let message = 'Couldnot Register user';
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        dispatch({
          type: authActionTypes.SIGNUP_ERROR,
          payload: { message },
        });
        reject(message);
      });
  });
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch({ type: authActionTypes.SIGNIN_REQUEST });

  return new Promise((resolve, reject) => {
    return axios
      .post('/login', { email, password })
      .then((response) => {
        dispatch({
          type: authActionTypes.SIGNIN_SUCCESS,
          payload: {
            message: response.data.message || 'Successfully LoggedIn',
          },
        });
        const storage = window.localStorage;
        storage.setItem('token', response.data.token);
        storage.setItem('current_user', JSON.stringify(response.data.user));
        dispatch({
          type: authActionTypes.SET_TOKEN,
          payload: response.data.token,
        });
        resolve(response.data.message || 'Successfully LoggedIn');
      })
      .catch((err) => {
        let message = 'Could not Login user';
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        dispatch({
          type: authActionTypes.SIGNIN_ERROR,
          payload: { message },
        });
        reject(message);
      });
  });
};

export const logoutUser = () => {
  const storage = window.localStorage;
  storage.removeItem('token');

  return (dispatch) =>
    dispatch({
      type: authActionTypes.LOGOUT,
    });
};

export const setTokenOnMount = () => {
  // if exists also set user
  const storage = window.localStorage;
  const token = storage.getItem('token');

  if (token) {
    return (dispatch) => {
      dispatch({
        type: authActionTypes.SET_TOKEN,
        payload: token,
      });
    };
  }
  return (dispatch) =>
    dispatch({
      type: authActionTypes.LOGOUT,
    });
};

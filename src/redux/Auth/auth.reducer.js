import authActionTypes from './auth.types';

const INITIAL_STATE = {
  token: null,
  error: false,
  message: '',
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case authActionTypes.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authActionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case authActionTypes.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case authActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: false,
      };

    case authActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case authActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;

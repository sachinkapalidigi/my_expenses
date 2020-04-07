import actionTypes from './categories.types';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: false,
  message: '',
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case actionTypes.ADD_CATEGORY_SUCCESSFULL:
      return {
        ...state,
        laoding: false,
        categories: [...state.categories, action.payload],
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;

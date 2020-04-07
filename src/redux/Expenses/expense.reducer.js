import actionTypes from './expense.types';
import { getExpensesUtil } from './expenses.util';

const INITIAL_STATE = {
  expenses: [],
  loading: false,
  message: '',
  error: false,
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_EXPENSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_EXPENSES_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        expenses: getExpensesUtil(action.payload),
      };
    case actionTypes.ADD_EXPENSE_SUCCESSFULL:
      return {
        ...state,
        laoding: false,
        expenses: [...state.expenses, action.payload],
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

export default expenseReducer;

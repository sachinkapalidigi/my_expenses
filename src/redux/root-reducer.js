import { combineReducers } from 'redux';
import authReducer from './Auth/auth.reducer';
import categoriesReducer from './Categories/categories.reducer';
import expenseReducer from './Expenses/expense.reducer';

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  expenses: expenseReducer,
});

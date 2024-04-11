import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from './ExpenseReducer';

const rootReducer = combineReducers({
  expenses: expenseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

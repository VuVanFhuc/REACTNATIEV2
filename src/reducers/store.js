import {createStore} from 'redux';
import ExpenseReducer from './ExpenseReducer';

const store = createStore(ExpenseReducer);

export default store;

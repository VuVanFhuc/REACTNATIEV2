// reducers.js

import {
  FETCH_EXPENSES_REQUEST,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILURE,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILURE,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAILURE,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILURE,
} from '../actions/ActionTypes';

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSES_REQUEST:
    case CREATE_EXPENSE_REQUEST:
    case UPDATE_EXPENSE_REQUEST:
    case DELETE_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id ? action.payload : expense,
        ),
        loading: false,
        error: null,
      };
    case DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload,
        ),
        loading: false,
        error: null,
      };
    case FETCH_EXPENSES_FAILURE:
    case CREATE_EXPENSE_FAILURE:
    case UPDATE_EXPENSE_FAILURE:
    case DELETE_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;

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
} from './ActionTypes';

export const fetchExpensesRequest = () => ({
  type: FETCH_EXPENSES_REQUEST,
});

export const fetchExpensesSuccess = expenses => ({
  type: FETCH_EXPENSES_SUCCESS,
  payload: expenses,
});

export const fetchExpensesFailure = error => ({
  type: FETCH_EXPENSES_FAILURE,
  payload: error,
});

// Action creators cho việc tạo expense mới
export const createExpenseRequest = () => ({
  type: CREATE_EXPENSE_REQUEST,
});

export const createExpenseSuccess = expense => ({
  type: CREATE_EXPENSE_SUCCESS,
  payload: expense,
});

export const createExpenseFailure = error => ({
  type: CREATE_EXPENSE_FAILURE,
  payload: error,
});

// Action creators cho việc cập nhật expense
export const updateExpenseRequest = () => ({
  type: UPDATE_EXPENSE_REQUEST,
});

export const updateExpenseSuccess = expense => ({
  type: UPDATE_EXPENSE_SUCCESS,
  payload: expense,
});

export const updateExpenseFailure = error => ({
  type: UPDATE_EXPENSE_FAILURE,
  payload: error,
});

// Action creators cho việc xóa expense
export const deleteExpenseRequest = () => ({
  type: DELETE_EXPENSE_REQUEST,
});

export const deleteExpenseSuccess = expenseId => ({
  type: DELETE_EXPENSE_SUCCESS,
  payload: expenseId,
});

export const deleteExpenseFailure = error => ({
  type: DELETE_EXPENSE_FAILURE,
  payload: error,
});

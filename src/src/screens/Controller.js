import {Alert} from 'react-native';
import {
  addExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from '../jsonsever/api';

export const getExpressData = callBackData => {
  fetchExpenses()
    .then(data => {
      callBackData(data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const addExpenseData = (newExpense, callBackData) => {
  addExpense(newExpense)
    .then(data => {
      callBackData(data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const updateExpenseData = (expenseId, updatedExpense, callBackData) => {
  updateExpense(expenseId, updatedExpense)
    .then(data => {
      callBackData(data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const deleteExpenseData = (expenseId, callBackData) => {
  deleteExpense(expenseId)
    .then(data => {
      callBackData(data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    payload: expense,
  };
};

export const deleteExpense = expenseId => {
  return {
    type: 'DELETE_EXPENSE',
    payload: expenseId,
  };
};

export const updateExpense = expense => {
  return {
    type: 'UPDATE_EXPENSE',
    payload: expense,
  };
};

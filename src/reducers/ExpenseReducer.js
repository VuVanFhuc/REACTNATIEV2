import {sampleExpenses} from '../config/ExpensesData';

const initialState = {
  expenses: sampleExpenses,
};

const ExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload,
        ),
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id ? action.payload : expense,
        ),
      };
    default:
      return state;
  }
};

export default ExpenseReducer;

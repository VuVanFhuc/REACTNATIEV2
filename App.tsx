import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ExpenseListScreen from './src/src/screens/ExpenseListScreen';
import expenseReducer from './src/src/reducers/ExpenseReducer';
const rootReducer = combineReducers({
  expenses: expenseReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ExpenseListScreen />
    </Provider>
  );
};

export default App;

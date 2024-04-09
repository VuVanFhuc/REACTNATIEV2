import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ExpenseReducer from './src/reducers/ExpenseReducer';
import ExpenseListScreen from './src/screens/ExpenseListScreen';

const rootReducer = combineReducers({
  expenses: ExpenseReducer,
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

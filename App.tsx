import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './navigation/Main';
import {Provider} from 'react-redux';
import {store} from './config/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Main />
      </>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

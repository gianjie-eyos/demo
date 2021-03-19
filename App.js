/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

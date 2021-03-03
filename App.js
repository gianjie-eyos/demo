/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// import Navigator from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View testID={'view_container'} style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
        <Text testID={'text_label'}>Hello world, you've made it.</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const landingScreen = ({navigation: {navigate}}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        backgroundColor: 'yellow',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>This is a Sales Screen</Text>
      <TouchableOpacity
        onPress={() => navigate('SalesAccount', {id: 'abcsd123781'})}>
        <Text>Navigator to Sales Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landingScreen;

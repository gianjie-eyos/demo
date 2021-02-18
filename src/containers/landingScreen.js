import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const landingScreen = (props) => {
  const {push, navigate} = props.navigation;
  console.log(props);
  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        backgroundColor: 'pink',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>This is a landing screen</Text>
      <TouchableOpacity onPress={() => navigate('MyModal')}>
        <Text>Navigator to OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landingScreen;

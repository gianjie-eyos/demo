import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

const otpScreen = ({navigation: {navigate}}) => {
  return (
    <View style={{borderWidth: 1, flex: 1, backgroundColor: 'cyan'}}>
      <Text>This is an OTP screen</Text>
      <TouchableOpacity onPress={() => navigate('Setting')}>
        <Text>Navigate to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default otpScreen;

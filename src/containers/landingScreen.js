import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const landingScreen = ({navigation: {navigate}}) => {
  return (
    <View style={{borderWidth: 1, flex: 1, backgroundColor: 'pink'}}>
      <Text>This is a landing screen</Text>
      <TouchableOpacity onPress={() => navigate('OTP')}>
        <Text>Navigator to OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landingScreen;

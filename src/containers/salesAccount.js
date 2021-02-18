import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SalesAccount = (props) => {
  console.log(props);
  const {push, navigate} = props.navigation;
  const {params} = props.route;
  const {id} = params;

  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        backgroundColor: 'purple',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>This is a Sales Account</Text>
      <Text>Sales Account Id: {id}</Text>
      <TouchableOpacity onPress={() => navigate('MyModal')}>
        <Text>This is Navigate Command</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SalesAccount;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const salesScreen = ({info, apple}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        {info} {apple}
      </Text>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {apple, info} = state.apple;
  return {apple, info};
};

export default connect(
  mapStateToProps,
  {},
)(salesScreen);

const styles = {
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
};

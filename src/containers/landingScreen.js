import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  onIncreaseAppleNumber,
  onDecreaseAppleNumber,
  onIncreasePearNumber,
  onDecreasePearNumber,
} from '../redux/action';

const landingScreen = ({
  info,
  apple,
  pear,
  pearInfo,
  onIncreaseAppleNumber,
  onDecreaseAppleNumber,
  onIncreasePearNumber,
  onDecreasePearNumber,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        {info} {apple}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onIncreaseAppleNumber(1)}>
          <Text>We got more apples (+)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onDecreaseAppleNumber(1)}>
          <Text>Apples are rotten (-)</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center'}}>
        {pearInfo} {pear}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onIncreasePearNumber(1)}>
          <Text>We got more pears (+)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onDecreasePearNumber(1)}>
          <Text>Pears are rotten (-)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {apple, info} = state.apple;
  const {pear, info: pearInfo} = state.pear;

  return {apple, info, pear, pearInfo};
};

export default connect(
  mapStateToProps,
  {
    onIncreaseAppleNumber,
    onDecreaseAppleNumber,
    onIncreasePearNumber,
    onDecreasePearNumber,
  },
)(landingScreen);

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

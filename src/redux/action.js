import {
  DECREASE_APPLE_NUMBER,
  INCREASE_APPLE_NUMBER,
  INCREASE_PEAR_NUMBER,
  DECREASE_PEAR_NUMBER,
} from './types';

export function onIncreaseAppleNumber(params) {
  return dispatch => {
    dispatch({type: INCREASE_APPLE_NUMBER, payload: params});
  };
}

export function onDecreaseAppleNumber(params) {
  return dispatch => {
    dispatch({type: DECREASE_APPLE_NUMBER, payload: params});
  };
}

export function onIncreasePearNumber(params) {
  return dispatch => {
    dispatch({type: INCREASE_PEAR_NUMBER, payload: params});
  };
}

export function onDecreasePearNumber(params) {
  return dispatch => {
    dispatch({type: DECREASE_PEAR_NUMBER, payload: params});
  };
}

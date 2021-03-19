import * as actions from './types';
const initialState = {
  info: 'We have this amount of pear: ',
  pear: 0,
};

export default function(state = initialState, action) {
  let newPear = state.pear;

  switch (action.type) {
    case actions.APP_STATE:
      // carry out this logic
      return state;
    case actions.INCREASE_PEAR_NUMBER:
      newPear += action.payload;
      return {...state, pear: newPear};

    case actions.DECREASE_PEAR_NUMBER:
      newPear -= action.payload;
      if (newPear < 0) {
        newPear = 0;
      }
      return {...state, pear: newPear};

    default:
      return state;
  }
}

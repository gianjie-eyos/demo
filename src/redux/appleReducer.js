import * as actions from './types';
const initialState = {
  info: 'We have this amount of apples: ',
  apple: 0,
};

export default function(state = initialState, action) {
  let newApple = state.apple;

  switch (action.type) {
    case actions.APP_STATE:
      // carry out this logic
      return state;
    case actions.INCREASE_APPLE_NUMBER:
      newApple += action.payload;
      return {...state, apple: newApple};

    case actions.DECREASE_APPLE_NUMBER:
      newApple -= action.payload;
      if (newApple < 0) {
        newApple = 0;
      }
      return {...state, apple: newApple};

    default:
      return state;
  }
}

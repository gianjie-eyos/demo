import {combineReducers} from 'redux';
import AppleReducer from './appleReducer';
import PearReducer from './pearReducer';

export default combineReducers({
  apple: AppleReducer,
  pear: PearReducer,
});

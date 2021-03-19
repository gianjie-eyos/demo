import {createStore, combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './src/redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import {persistStore, persistReducer} from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['user', 'configuration'],
// };

// const pReducer = persistReducer({}, AllReducers);
const store = createStore(AllReducers, undefined, applyMiddleware(thunk));
// const persistor = persistStore(store);

// export {persistor, store};
export {store};

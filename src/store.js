import rootReducer from './reducer';
import { combineReducers } from 'redux';

export const combinedReducers = combineReducers({ rootReducer });

// const appReducer = (state, action) => {
//   if (action.type === 'LOGOUT') {
//     state = undefined;
//   }
//   return rootReducer(state, action);
// };

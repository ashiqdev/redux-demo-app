import { combineReducers } from 'redux';
import counter from './counter';
import loggedIn from './loggedIn';

const allReducers = combineReducers({
  counter,
  loggedIn,
});

export default allReducers;

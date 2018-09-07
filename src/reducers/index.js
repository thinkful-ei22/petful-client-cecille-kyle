import { combineReducers } from 'redux';

import { catReducer as cat } from './cat';
import { dogReducer as dog } from './dog';

export default combineReducers({ 
  cat,
  dog
});
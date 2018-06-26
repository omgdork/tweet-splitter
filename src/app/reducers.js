import { combineReducers } from 'redux';
import homeReducer from './modules/home/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;

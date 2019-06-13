import { combineReducers } from 'redux';
import productReducer from './productReducer';
import dealboardReducer from './dealboardReducer';

export default combineReducers({
  product: productReducer,
  dealboard: dealboardReducer
});

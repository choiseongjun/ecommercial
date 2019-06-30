import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import rootReducer from '../reducers/indexReducer';

// const rootReducer = combineReducers({
//     form: formReducer,
//   })
  
//   const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
  
//   export default store

  const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
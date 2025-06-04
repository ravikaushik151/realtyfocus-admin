import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ Named import
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
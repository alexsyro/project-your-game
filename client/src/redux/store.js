import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import themeReducer from './reducers/themeReducer';

const rootReduser = combineReducers({
  themeReducer,
});

export default createStore(
  rootReduser,
  // composeWithDevTools(),
);

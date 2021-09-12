import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';

const rootReduser = combineReducers({
  themeReducer,
});

export default createStore(
  rootReduser,
);

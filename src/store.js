import { createStore, combineReducers } from 'redux';
import singleReducer from './singleReducer';

const store = createStore(singleReducer);

export default store;
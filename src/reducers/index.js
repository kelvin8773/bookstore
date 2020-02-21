import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const bookstoreApp = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});


export default bookstoreApp;
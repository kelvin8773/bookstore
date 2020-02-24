import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';
import statusReducer from './status';

const bookstoreApp = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  status: statusReducer,
});


export default bookstoreApp;

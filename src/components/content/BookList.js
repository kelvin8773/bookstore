import React from 'react';

import CategoryFilter from './CategoryFilter';
import Books from './Books';
import Popups from './Popup';

const BookList = ({ books, status, selectBook, removeBook, updateBook, changeFilter }) => (
  <div id="book-list">
    <CategoryFilter handleChange={changeFilter} />
    <Books books={books} selectBook={selectBook} />
    <Popups books={books} status={status} removeBook={removeBook} updateBook={updateBook} />
  </div>
);

export default BookList;

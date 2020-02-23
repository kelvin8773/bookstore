import React from 'react';

import CategoryFilter from './CategoryFilter';
import Books from './Books';
import Popups from './Popup';

const BookList = ({ books, removeBook, changeFilter }) => (
  <div id="book-list">
    <CategoryFilter handleChange={changeFilter} />
    <Books books={books} removeBook={removeBook} />
    <Popups books={books} removeBook={removeBook} />
  </div>
);

export default BookList;

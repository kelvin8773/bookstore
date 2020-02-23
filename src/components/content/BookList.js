import React from 'react';

import Books from './Books';
import CategoryFilter from './CategoryFilter';

const BookList = ({ books, removeBook, changeFilter }) => (
  <div id="book-list">
    <CategoryFilter handleChange={changeFilter} />
    <Books books={books} removeBook={removeBook} />
  </div>
);

export default BookList;

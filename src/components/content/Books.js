import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books, selectBook }) => (
  <div id="book-list-table">
    {
      books.map(book => (
        <Book
          key={book.id}
          book={book}
          selectBook={selectBook}
        />
      ))
    }
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Books;

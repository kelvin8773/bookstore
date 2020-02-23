import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books, removeBook }) => (
  <div id="book-list-table">
    {
      books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemoveBook={removeBook}
        />
      ))
    }
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Books;

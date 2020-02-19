import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books, removeBook }) => (
  <table id="book-list">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={removeBook}
          />
        ))
      }
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);

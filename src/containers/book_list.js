import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../actions';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table id="book-list">
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {
      books.map(book => (
        <Book key={book.id} book={book} />
      ))
    }
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  remove: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf,
};

BookList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

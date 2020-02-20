import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const filterBooks = filter === 'All'
    ? books : books.filter(book => book.category === filter);

  return (
    <div id="book-list">
      <CategoryFilter handleChange={changeFilter} />

      <table id="book-list-table">
        <tbody>
          {
            filterBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={removeBook}
              />
            ))
          }
        </tbody>
      </table>


    </div>
  );
};


const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: category => dispatch(changeFilter(category)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);

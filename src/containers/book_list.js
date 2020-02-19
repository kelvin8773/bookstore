import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

class BookList extends React.Component {

  render() {
    const { books, filter, removeBook, changeFilter } = this.props;
    const filterBooks = filter === 'All' ?
      books : books.filter(book => book.category === filter);
    return (
      <div>
        <CategoryFilter handleChange={changeFilter} />
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
  }
}

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
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);

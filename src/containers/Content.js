import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import BookList from '../components/content/BookList';

const getVisibleBooks = (books, filter) => (
  filter === 'All' ? books : books.filter(book => book.category === filter)
)

const mapStateToProps = state => ({
  books: getVisibleBooks(state.books, state.filter)
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: category => dispatch(changeFilter(category)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);

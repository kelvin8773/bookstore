import { connect } from 'react-redux';
import { createBook } from '../actions';
import Footer from '../components/bottom/Footer';

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(Footer);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = ({ dispatch }) => (
  <form id="create-book-form" action="">
    <span>
      <input id="title" type="text" placeholder="Book Title" />
    </span>
    <span>
      <select name="category" id="category">
        <option default value="">Category</option>
        {CATEGORIES.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </span>

    <span>
      <button type="submit" id="add-book-btn" onClick={dispatch}>Submit</button>
    </span>
  </form>
);

const mapDispatchToProps = dispatch => ({
  create: book => dispatch(createBook(book)),
});

BookForm.propTypes = {
  dispatch: PropTypes.instanceOf(Function),
};

BookForm.defaultProps = {
  dispatch: () => { },
};

export default connect(null, mapDispatchToProps)(BookForm);

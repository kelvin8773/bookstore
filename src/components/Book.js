import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button
        type="submit"
        className="button3"
        onClick={() => handleRemoveBook(book)}
        style={{ backgroundColor: 'lightsalmon' }}
      >
        Remove
      </button>
    </td>
  </tr>


);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};


export default Book;

import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <a href="#"
        className="button3"
        onClick={() => handleRemoveBook(book)}
        style={{ backgroundColor: 'lightsalmon' }}>
        Remove</a>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;

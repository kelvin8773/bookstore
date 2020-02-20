import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book-card">
    <div className="book-info">
      <h5 className="book-category">{book.category}</h5>
      <h2 className="book-title">{book.title}</h2>
      <h6 className="book-info-detail">
        <span className="book-author">Frank Herbert</span>
        <span className="book-isbn">{book.id}</span>
      </h6>

      <h6 className="action-buttons">
        <span> Notes </span>
        |
        <span> Edit </span>
        |
        <span onClick={() => handleRemoveBook(book)}>
          Remove
        </span>
      </h6>

    </div>

    <div className="read-progress">
      <div className="progress">
        <div className="progress-circle" data-progress="45">
        </div>
      </div>

      <div className="progress-detail">
        <h5 className="current-chapter">Current Chapter</h5>
        <h5 className="chapter-name">Chapter 3: "A Lesson Learned" </h5>
        <button className="update-progress btn ">Update Progress</button>
      </div>
    </div>
  </div>


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

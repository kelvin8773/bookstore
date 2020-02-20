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
        <span> Comment </span>
        |
        <span> Edit </span>
        |
        <span onClick={() => handleRemoveBook(book)}>
          Remove
        </span>
      </h6>

    </div>

    <div className="progress-circle">
      <i className="fas fa-spinner fa-3x"></i>
      <div className="progress-percentage">
        80%
      </div>
    </div>

    <div className="progress-detail">
      <div>Current Chapter</div>
      <h3>Chapter 3: "A Lesson Learned" </h3>
      <button >Update Progress</button>
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

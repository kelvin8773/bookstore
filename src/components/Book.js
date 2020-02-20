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
        <button type="button"> Notes </button>
        |
        <button type="button"> Edit </button>
        |
        <button type="button" onClick={() => handleRemoveBook(book)}>
          Remove
        </button>
      </h6>

    </div>

    <div className="read-progress">
      <div className="progress">
        <div className="progress-circle" data-progress={book.progress} />
      </div>

      <div className="progress-detail">
        <h5 className="current-chapter">Current Chapter</h5>
        <h5 className="chapter-name">Chapter 3: A Lesson Learned</h5>
        <button type="button" className="update-progress btn ">Update Progress</button>
      </div>
    </div>
  </div>


);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
    progress: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};


export default Book;

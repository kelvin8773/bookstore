import React from 'react';

const BookDetails = ({ book }) => {
  const coverPlaceholder = './assets/images/placeholder.png';
  const authorPlaceholder = 'Frank Herbert';

  return (
    <div className="book-detail">
      <div className="book-cover">
        <img
          src={book.cover ? book.cover : coverPlaceholder}
          alt="cover"
        />
      </div>
      <div>
        <h5 className="book-category">{book.category}</h5>
        <h2 className="book-title">{book.title}</h2>
        <h6 className="book-info-detail">
          <span className="book-author">{book.author ? book.author : authorPlaceholder}</span>
          <span className="book-isbn">{book.id}</span>
        </h6>
      </div>
    </div>
  );
}

export default BookDetails;

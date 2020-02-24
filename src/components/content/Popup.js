import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import { CATEGORIES } from '../../helpers/constant';


const Popups = ({ books, removeBook }) => {
  const book = books[0];

  return (
    <div id="popup-module">
      <div id="popup-book-comment" className="overlay">
        <div className="popup">
          <BookDetails book={book} />
          <a className="close" href="#">&times;</a>
          <div className="content">
            <form action="">
              <textarea name="comment" id="comment-input" rows="4" cols="31" placeholder="Put your comment here ..."></textarea>
              <button className="btn">Comment</button>
            </form>

            <div className="comment-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing!

            <p className="text-right font-weight-bold">Visitor1720</p>
            </div>
            <div className="comment-text">
              Alias veniam aut voluptatum numquam excepturi soluta.
            <p className="text-right font-weight-bold">Visitor8711</p>
            </div>
          </div>
        </div>
      </div>

      <div id="popup-edit-book" className="overlay">
        <div className="popup">
          <BookDetails book={book} />
          <a className="close" href="#">&times;</a>
          <div className="content">
            <form className="book-update-form">
              <div className="update-item">
                <label htmlFor="title">Title:</label>
                <input name="title"
                  className="update-title"
                  type="text"
                  value={book.title}
                  onChange={e => console.log(e.target.value)}
                />
              </div>
              <div className="update-item">
                <label htmlFor="category">Category:</label>
                <select name="category" className="update-category">
                  <option default value={book.category}>{book.category}</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="update-item">
                <label htmlFor="author">Author:</label>
                <input name="author"
                  className="update-author"
                  type="text"
                  value={book.author}
                  onChange={e => console.log(e.target.value)}
                />
              </div>

              <button className="btn">Save</button>
            </form>

          </div>
        </div>
      </div>

      <div id="popup-remove-book" className="overlay">
        <div className="popup">
          <BookDetails book={book} />
          <a className="close" href="#">&times;</a>
          <div className="content">
            <div className="message">
              Are you sure want to delete this book?
            </div>

            <div className="button-group">
              <a href="#" className="btn" onClick={() => removeBook(book)}>Yes</a>
              <button type="button" className="btn">Oh, No!</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Popups.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Popups;

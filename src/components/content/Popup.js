import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import { CATEGORIES } from '../../helpers/constant';


class Popups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
      author: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateBook } = this.props;
    const book = { ...this.state, id: this.props.status.currentBookID };
    updateBook(book);
    this.setState({
      id: '',
      title: '',
      category: '',
      author: ''
    });
  }

  componentDidMount() {
    const { books, status } = this.props;
    const book = books.filter(book => book.id === status.currentBookID);
    this.setState({
      ...this.state, book
    });
  }



  render() {
    const { books, removeBook, status } = this.props;
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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="update-item">
                  <label htmlFor="category">Category:</label>
                  <select name="category"
                    className="update-category"
                    onChange={this.handleChange}
                  >
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
                    onChange={this.handleChange}
                  />
                </div>

                <button className="btn" onSubmit={e => {
                  e.preventDefault();
                }}>Save</button>
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
}


Popups.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Popups;

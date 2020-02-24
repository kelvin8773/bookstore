import React from 'react';
import PropTypes from 'prop-types';
import { makeID } from '../../helpers/index';
import { CATEGORIES } from '../../helpers/constant';

class AddBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
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
    const { createBook } = this.props;
    const book = { ...this.state, id: makeID() };
    if (book.title !== '' && book.category !== '') {
      createBook(book);
      this.setState({
        title: '',
        category: '',
      });
    }
  }

  render() {
    return (
      <div id="create-book-form">
        <div className="form-title">add new book</div>
        <form action="">
          <input
            name="title"
            className="create-book-title"
            type="text"
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select
            name="category"
            className="create-book-category"
            onChange={this.handleChange}
          >
            <option default value="action">Category</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button
            className="create-button btn"
            type="submit"
            onClick={this.handleSubmit}
          >
            Add Book
          </button>
        </form>

      </div>
    );
  }

}

AddBookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default AddBookForm;


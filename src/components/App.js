import React from 'react';

import BookList from '../containers/book_list';
import BookForm from '../containers/books_form';

const App = () => (
  <div id="app-content">
    <h1 id="app-title">Book Store</h1>
    <BookForm />
    <BookList />
  </div>
);



export default App;

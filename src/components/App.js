import React from 'react';

import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';


const App = () => (
  <div id="app-content">
    <h1 id="app-title">Bookstore CMS</h1>
    <BookList />
    <BookForm />
  </div>
);


export default App;

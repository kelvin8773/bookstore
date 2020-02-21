import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Navbar from '../containers/Navbar';
import Footer from './Footer';


const App = () => (
  <div id="app-body">
    <Navbar />
    <div id="app-content">
      <BookList />
      <BookForm />
    </div>
    <Footer />
  </div>
);


export default App;

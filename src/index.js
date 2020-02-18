import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/index';

import './assets/stylesheets/index.scss';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Born to Run',
      category: 'Learning'
    },
    {
      id: 2,
      title: 'Steve Jobs',
      category: 'Biography'
    },
    {
      id: 3,
      title: 'Einstein: His Life and Universe',
      category: 'Biography'
    },
    {
      id: 4,
      title: 'The Histories',
      category: 'History'
    },

  ]
}

ReactDOM.render(
  <Provider store={createStore(rootReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'));


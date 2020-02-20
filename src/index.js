import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/index';
import { makeID } from './helpers/index';

import './assets/stylesheets/index.scss';

const initialState = {
  books: [
    {
      id: makeID(),
      title: 'Born to Run',
      category: 'Learning',
      author: 'Christopher McDougall',
      cover: '',
      progress: 34,
    },
    {
      id: makeID(),
      title: 'Einstein: His Life and Universe',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: '',
      progress: 12,
    },
    {
      id: makeID(),
      title: 'Steve Jobs',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: '',
      progress: 83,
    },
  ],
};

ReactDOM.render(
  <Provider store={createStore(rootReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

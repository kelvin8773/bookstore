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
      cover: './assets/images/born_to_run.jpg',
      progress: {
        percent: 54,
        chapter: "Chapter 3 - 'A Lesson Learned'",
      },
    },
    {
      id: makeID(),
      title: 'Einstein: His Life and Universe',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: './assets/images/einstein.jpg',
      progress: {
        percent: 12,
        chapter: 'Chapter Two: Childhood',
      },
    },
    {
      id: makeID(),
      title: 'Steve Jobs',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: './assets/images/steve_jobs.jpg',
      progress: {
        percent: 77,
        chapter: 'Chapter 29 ~ Apple Stores',
      },

    },
  ],
};

ReactDOM.render(
  <Provider store={createStore(rootReducer, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/index';
import { INIT_STATE } from './helpers/constant';
import './assets/stylesheets/index.scss';

ReactDOM.render(
  <Provider store={createStore(rootReducer, INIT_STATE)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

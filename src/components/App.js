import React from 'react';
import Navbar from './top/Navbar';
import Content from '../containers/Content';
import Bottom from '../containers/Bottom';

const App = () => (
  <div id="app-body">
    <Navbar />
    <Content />
    <Bottom />
  </div>
);

export default App;

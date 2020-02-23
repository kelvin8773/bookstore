import React from 'react';
import AddBookForm from './AddBookForm';

const Footer = ({ createBook }) => (
  <div className="bottom-part">
    <AddBookForm createBook={createBook} />
    <div id="app-footer">
      <div className="foot-note">
        Handcraft by
      {' '}
        <a href="https://kelvinliang.cn/">Kelvin Liang</a>
        {' '}
        @2020.
    </div>
      <div className="foot-links">
        <a href="https://github.com/kelvin8773/bookstore/blob/master/LICENSE">LICENSE</a>
        <a href="https://github.com/kelvin8773/bookstore">Source Code</a>
        <a href="https://github.com/kelvin8773/bookstore/issues">Issues?</a>
      </div>
    </div>
  </div>
);

export default Footer;

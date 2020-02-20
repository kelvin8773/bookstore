import React from 'react';

const Navbar = () => (
  <div id="app-navbar">
    <div className="logo-menu">
      <h1 className="logo">Bookstore CMS</h1>
      <div className="menu">
        <div className="menu-item menu-active">Books</div>
        <div className="menu-item">Categories</div>
      </div>
    </div>
    <div className="login">
      <i className="fas fa-user login-logo" />
    </div>
  </div>
);

export default Navbar;

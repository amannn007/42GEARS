
import React from 'react';
import './Navbar.css'; // You can add this file for Navbar-specific styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
      <img src="/assets/logo.png" alt="Logo" />
      </div>
      <div className="navbar-user">
        <span>Test User</span>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

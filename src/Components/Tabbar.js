import React from 'react';
import '../Styles/Tabbar.css'
function Tabbar() {
  return (
    <header className="header">
    <div className="logo">
      pleo
    </div>
    <nav className="nav">
      <a href="#services">Services</a>
      <a href="#address">Address</a>
      <a href="#review">Review</a>
    </nav>
    <div className="auth">
      <button className="login-btn">Login</button>
    </div>
  </header>
  );
}

export default Tabbar;

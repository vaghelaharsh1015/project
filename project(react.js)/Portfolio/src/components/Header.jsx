import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Portfolio</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn btn-outline">Let's Talk</button>
      </div>
    </header>
  );
};

export default Header;

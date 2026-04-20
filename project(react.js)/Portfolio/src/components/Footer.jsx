import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Portfolio</h3>
        <p>&copy; {new Date().getFullYear()} All rights reserved. Built with simplicity.</p>
      </div>
    </footer>
  );
};

export default Footer;

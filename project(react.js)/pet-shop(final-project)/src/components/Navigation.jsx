import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-cyan-primary">
      <div className="container mx-auto px-4">
        <button 
          className="navbar-toggler hidden" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNav"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <ul className="flex justify-between items-center py-0">
          <div className="flex gap-3">
            <li className="nav-item active">
              <Link className="text-white text-3.25 font-bold uppercase tracking-wider py-4.5 px-5.5 block hover:bg-opacity-80" to="/">HOME</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="text-white text-3.25 font-bold uppercase tracking-wider py-4.5 px-5.5 block hover:bg-opacity-80" href="#" data-bs-toggle="dropdown">
                PAGES
              </a>
            </li>
          </div>
          <div className="flex gap-3">
            <li className="nav-item dropdown">
              <a className="text-white text-3.25 font-bold uppercase tracking-wider py-4.5 px-5.5 block hover:bg-opacity-80" href="#" data-bs-toggle="dropdown">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <Link className="text-white text-3.25 font-bold uppercase tracking-wider py-4.5 px-5.5 block hover:bg-opacity-80" to="/shop">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className="text-white text-3.25 font-bold uppercase tracking-wider py-4.5 px-5.5 block hover:bg-opacity-80" to="/contact">CONTACT US</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import './Search.css';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Search;

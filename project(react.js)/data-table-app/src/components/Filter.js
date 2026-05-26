import React from 'react';
import './Filter.css';

const Filter = ({ cities, selectedCity, onCityChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="city-filter">Filter by City:</label>
      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="city-select"
      >
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

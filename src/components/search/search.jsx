import React from 'react';
import './search.css';

function Search() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </div>
  );
}

export default Search;

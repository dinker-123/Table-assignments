import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by college name..."
      className="search-bar"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

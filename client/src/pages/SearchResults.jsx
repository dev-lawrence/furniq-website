import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../data/AllProductsData';

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const currentSearchQuery = new URLSearchParams(location.search).get(
      'query'
    );
    if (currentSearchQuery) {
      const filteredResults = items.filter((item) =>
        item.title.toLowerCase().includes(currentSearchQuery.toLowerCase())
      );
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults([]);
    }
  }, [location.search]);

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
      <ul className="container">
        {filteredResults.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

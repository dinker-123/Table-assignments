import React, { useState, useEffect, useCallback } from 'react';
import CollegeRow from './CollegeRow/CollegeRow';
import SearchBar from './SearchBar/SearchBar';
import collegesData from './college/colleges.json';
import './App.css';

function App() {
  const [colleges, setColleges] = useState(collegesData.slice(0, 10)); 
  const [query, setQuery] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const loadMoreColleges = useCallback(() => {
    const moreColleges = collegesData.slice(colleges.length, colleges.length + 10);
    setColleges(prev => [...prev, ...moreColleges]);
  }, [colleges.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreColleges();
      }
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreColleges]);

  const handleSearch = (query) => {
    setQuery(query.toLowerCase());
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sortedColleges = [...colleges].sort((a, b) => {
      if (field === "fees" || field === "userReviewRating") {
        return order === "asc" ? a[field] - b[field] : b[field] - a[field];
      }
      return 0;
    });

    setColleges(sortedColleges);
  };

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(query)
  );

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <table className="college-table" border="1">
        <thead>
          <tr>
            <th>CD Rank</th>
            <th>Colleges</th>
            <th>
              <button onClick={() => handleSort("fees")}>Course Fees</button>
            </th>
            <th>Placement</th>
            <th>
              <button onClick={() => handleSort("userReviewRating")}>User Reviews</button>
            </th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {filteredColleges.map(college => (
            <CollegeRow key={college.rank} college={college} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

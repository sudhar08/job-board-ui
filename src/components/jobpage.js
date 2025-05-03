"use client";

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import JobListings from './JobListings';

const JobPage = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    jobType: '',
    salary: 10,
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <div>
      <SearchBar onFilterChange={handleFilterChange} filters={filters} />
      <JobListings filters={filters} />
    </div>
  );
};

export default JobPage;

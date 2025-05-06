"use client";

import React, { useEffect, useState } from 'react';
import JobCard from './jobcard';
import SearchBar from './search';

const JobPage = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    query: '',
    location: '',
    jobType: '',
    salary: 100, // max salary slider
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://65.0.139.72:5000/api/jobs');
        if (!response.ok) throw new Error('Failed to fetch jobs');
        const data = await response.json();
        setJobData(data);
        setFilteredJobs(data); // initial set
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs when filters change
  useEffect(() => {
    // If query is empty, display all jobs
    if (filters.query === '') {
      setFilteredJobs(jobData); // show all jobs
      return;
    }

    const filtered = jobData.filter((job) => {
      const matchesTitle = job.job_title.toLowerCase().includes(filters.query.toLowerCase());
      const matchesLocation = filters.location ? job.location === filters.location : true;
      const matchesType = filters.jobType ? job.type === filters.jobType : true;
      const matchesSalary = job.salary <= filters.salary * 1000; // assuming salary in ₹
      return matchesTitle && matchesLocation && matchesType && matchesSalary;
    });
    setFilteredJobs(filtered);
  }, [filters, jobData]);

  return (
    <div className="px-8 py-6">
      <SearchBar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        {filteredJobs.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No jobs found</div>
        )}
      </div>
    </div>
  );
};

export default JobPage;

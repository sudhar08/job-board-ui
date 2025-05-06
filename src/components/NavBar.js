"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const clearForm = () => {
    setJobTitle('');
    setCompanyName('');
    setLocation('');
    setJobType('');
    setMinSalary('');
    setMaxSalary('');
    setApplicationDeadline('');
    setJobDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title: jobTitle,
      company: companyName,
      location,
      jobType,
      minSalary,
      maxSalary,
      applicationDeadline,
      jobDescription,
    };

    try {
      const response = await fetch('http://65.0.139.72:5000/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert('Job created successfully!');
        setShowPopup(false);
        clearForm();
      } else {
        alert('Failed to create job.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating job.');
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl bg-white py-4 px-8 flex items-center justify-between rounded-4xl mt-4 shadow-2xl ring-1 ring-gray-200">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={100}
            height={100}
          />
        </div>
      </div>

      <nav className="flex space-x-9">
        <a href="#" className="text-gray-700 hover:text-purple-500">Home</a>
        <a href="#" className="text-gray-700 hover:text-purple-500">Find Jobs</a>
        <a href="#" className="text-gray-700 hover:text-purple-500">Find Talents</a>
        <a href="#" className="text-gray-700 hover:text-purple-500">About us</a>
        <a href="#" className="text-gray-700 hover:text-purple-500">Testimonials</a>
      </nav>

      <button
        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full px-6 py-2 hover:from-purple-600 hover:to-purple-700"
        onClick={handleOpenPopup}
      >
        Create Jobs
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 relative" style={{ width: '800px', height: '750px' }}>
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={handleClosePopup}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-6">Create Job Opening</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Job Title</label>
                <input
                  type="text"
                  placeholder="Full Stack Developer"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Amazon, Microsoft, Swiggy"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Location</label>
                <select
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Choose Preferred Location</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Mumbai</option>
                  <option>Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Job Type</label>
                <select
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option>FullTime</option>
                  <option>PartTime</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
              </div>

              {/* Min & Max Salary side by side */}
              <div className="col-span-2 flex space-x-3">
                <div className="w-1/5">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Min Salary</label>
                  <input
                    type="text"
                    placeholder="₹1,00,000"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                  />
                </div>
                <div className="w-1/5">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Max Salary</label>
                  <input
                    type="text"
                    placeholder="₹12,00,000"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                  />
                </div>
                <div className='px-6'></div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-1">Application Deadline</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                    value={applicationDeadline}
                    onChange={(e) => setApplicationDeadline(e.target.value)}
                  />
                </div>
              </div>

              {/* Application Deadline on right */}
              <div className="col-span-2 flex justify-end">
               
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">Job Description</label>
                <textarea
                  placeholder="Please share a description to let the candidate know more about the job role"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-purple-500 text-gray-700"
                  rows="4"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="col-span-2 flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100"
                  onClick={handleClosePopup}
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-purple-600"
                >
                  Publish »
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

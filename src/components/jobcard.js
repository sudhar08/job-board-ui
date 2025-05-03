"use client";

import Image from 'next/image';
import React from 'react';
import { FiBriefcase, FiMapPin, FiDollarSign } from 'react-icons/fi';

const JobCard = ({ job }) => {
  if (!job) return null;

  const {
    job_title = 'No Title',
    company_name = 'No Company',
    location = 'No Location',
    job_type = 'N/A',
    min_salary = 'N/A',
    max_salary = 'N/A',
    application_deadline = 'N/A',
    job_description = 'No description provided.',
    created_at,
  } = job;

  // Calculate "time ago"
  const getTimeAgo = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const diffMs = now - createdDate;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 60) {
      return `${diffMinutes} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return `${diffDays}d ago`;
    }
  };

  const timeAgo = created_at ? getTimeAgo(created_at) : 'Just now';

  return (
    <div className="bg-white rounded-xl shadow-md border p-4 flex flex-col justify-between relative">
      {/* Top right badge */}
      <div className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
        {timeAgo}
      </div>

      {/* Company logo */}
      <div className="flex items-center mb-3">
        <Image
          src="/logo.png" // update this to dynamic logo if available
          alt={company_name}
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>

      {/* Job title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{job_title}</h3>

      {/* Job details row */}
      <div className="flex items-center text-sm text-gray-500 space-x-3 mb-2">
        <div className="flex items-center space-x-1">
          <FiBriefcase className="text-gray-400" />
          <span>1-3 yr Exp</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiMapPin className="text-gray-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiDollarSign className="text-gray-400" />
          <span>12 LPA</span>
        </div>
      </div>

      {/* Job description */}
      <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style, and create personalized</li>
      </ul>

      {/* Apply button */}
      <button className="w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;

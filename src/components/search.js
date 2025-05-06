import { FiSearch, FiMapPin } from 'react-icons/fi';

const SearchBar = ({ filters, setFilters }) => {
  return (
    <div className="bg-white py-6 px-8 flex items-center justify-between rounded-md shadow-md space-x-4">
      {/* Search input */}
      <div className="relative flex-grow max-w-md">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
        />
      </div>

      <div className="h-10 w-px bg-gray-300"></div>

      {/* Location select */}
      <div className="relative">
        <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-purple-500 appearance-none"
        >
          <option value="">Preferred Location</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Pune</option>
        </select>
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="h-10 w-px bg-gray-300"></div>

      {/* Job type select */}
      <div className="relative">
        <select
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
          className="pl-4 pr-10 py-2 rounded-md focus:outline-none focus:border-purple-500 appearance-none"
        >
          <option value="">Job type</option>
          <option>Fulltime</option>
          <option>Parttime</option>
          <option>Internship</option>
        </select>
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="h-10 w-px bg-gray-300"></div>

      {/* Salary slider */}
      <div className="flex flex-col items-start">
        <label className="text-gray-700 mb-1">Salary Per Month</label>
        <input
          type="range"
          min="10"
          max="100"
          value={filters.salary}
          onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
          className="w-40"
        />
        <span className="text-sm font-semibold mt-1">₹{filters.salary}k</span>
      </div>
    </div>
  );
};

export default SearchBar;

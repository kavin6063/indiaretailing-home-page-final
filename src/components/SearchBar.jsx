import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="container p-3 mb-6 border-b-2 mx-auto mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Form for Search */}
      <form className="flex items-center w-full md:w-auto md:flex-row">
        {/* Search Icon for Small Screens */}

        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        {/* Input Field */}
        <div className="relative flex-1 md:flex-grow-0 md:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="w-full md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here..."
            required
          />
        </div>
      </form>

      {/* Logo */}
      <div className="w-full md:w-auto">
        <img
          className="w-[150px] md:w-full mx-auto"
          src="/logo1.png"
          alt="Logo"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <button className="bg-[#e21b22] px-4 py-2 text-white w-full md:w-auto">
          SUBSCRIBE
        </button>
        <button className="bg-white px-4 py-2 text-black border-[0.67px] w-full md:w-auto">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

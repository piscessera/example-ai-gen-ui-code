import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-400 px-4 py-2 rounded-md w-64"
      />
    </div>
  );
};

export default SearchBar;

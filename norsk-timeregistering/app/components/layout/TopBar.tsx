import React from 'react';

const TopBar = () => {
  return (
    <header className="bg-white p-4 flex justify-end items-center">
      <div className="mr-4">
        <button className="bg-gray-300 p-2 rounded-full">
          {/* Bell icon */}
        </button>
      </div>
      <div>
        <img
          src="/path-to-luke-asote-image.jpg"
          alt="Luke Asote"
          className="h-8 w-8 rounded-full"
        />
      </div>
      <div className="ml-4">
        <span className="font-semibold">Luke Asote</span>
        <span className="text-gray-600 text-sm block">Admin for Associations</span>
      </div>
    </header>
  );
};

export default TopBar;

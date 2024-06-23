// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="flex items-end w-full">
        <h1 className="text-white text-3xl font-bold mr-2">BookRecommend.App</h1>
        <span className="text-white text-sm relative" style={{ top: '0.25rem' }}>powered by AI</span>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import newLogo from '../assets/new-logo.webp'; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={newLogo}
          alt="BookRecommend.App Logo"
          className="h-10 w-10"
        />
        <div className="flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-2">
          <h1 className="text-white text-xl sm:text-3xl font-bold">
            BookRecommend.App
          </h1>
          <span className="text-white text-xs sm:text-sm relative sm:top-1">
            powered by AI
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;


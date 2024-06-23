// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import newLogo from "../assets/new-logo.webp"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <Link to="/" className="flex items-center">
        <img
          src={newLogo}
          alt="BookRecommend.App Logo"
          className="h-10 w-10 mr-2"
        />
        <h1 className="text-white text-3xl font-bold mr-2">
          BookRecommend.App
        </h1>
        <span
          className="text-white text-sm relative"
          style={{ top: "0.60rem" }}
        >
          powered by AI
        </span>
      </Link>
    </header>
  );
};

export default Header;

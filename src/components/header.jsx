import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
          <nav className="hidden md:flex">
            <a href="#" className="mx-2">About</a>
            <a href="#" className="mx-2">Vision</a>
            <a href="#" className="mx-2">Mission</a>
            <a href="#" className="mx-2">Departments</a>
            <a href="#" className="mx-2">Services</a>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1zm-7 5a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-6a1 1 0 0 1 0 0zM5 8a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H5z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="mx-2">About</a>
          <a href="#" className="mx-2">Vision</a>
          <a href="#" className="mx-2">Mission</a>
          <a href="#" className="mx-2">Departments</a>
          <a href="#" className="mx-2">Services</a>
        </nav>
        <div className="hidden md:flex items-center">
          <a href="#" className="mx-2">Social Media</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
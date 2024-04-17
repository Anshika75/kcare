import React, { useState } from "react";
import logo from "../assets/logo.png";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#fefefe] shadow-md w-full text-[#4396A2] poppins-medium p-4 lg:px-[50px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="ml-0 text-2xl font-bold w-[15%]">
          <a href="/">
            <img
              src={logo}
              alt=""
              className="h-8"
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex">
            <li>
              <a
                href="#home"
                className="p-4 mr-4 font-maven uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="p-4 mr-4 font-maven uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#sevents"
                className="p-4 mr-4 font-maven uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Departments
              </a>
            </li>
            <li>
              <a
                href="#sachievements"
                className="p-4 mr-4 font-maven uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#partner"
                className="p-4 mr-4 font-maven uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Login button for laptop/desktop */}
        <a href="https://drive.google.com/file/d/1HJYaFVWZCinxJSF3DI-cQnbwgagul3x8/view?usp=sharing">
          <button className="w-[145px] justify-center font-bold hidden lg:block bg-[#E2012D] text-white text-center cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded hover:bg-white hover:text-red-600 rounded-tr-full">
          Reimbursement
          </button>
        </a>

        {/* Mobile navigation button */}
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <p></p>
          ) : (
           <b></b>
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black p-4 space-y-4 text-xl mt-3 hover: text-white hover:transition-opacity duration-500 ease-in-out border-b border-white hover:border-red-700">
          <ul>
            <a href="/">
              <li className="font-maven uppercase p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-whit border-l-8 hover:border-red-700">
                HOME
              </li>
            </a>
            <a href="#about">
              <li className="font-maven uppercase p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                ABOUT
              </li>
            </a>
            <a href="#sevents">
              <li className="font-maven uppercase p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                EVENTS
              </li>
            </a>
            <a href="#sachievements">
              <li className="font-maven uppercase p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                ACHIEVERS
              </li>
            </a>
            <a href="#contact">
              <li className="font-maven uppercase p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                CONTACT US
              </li>
            </a>
            <a href="https://drive.google.com/file/d/1HJYaFVWZCinxJSF3DI-cQnbwgagul3x8/view?usp=sharing">
            <button className="bg-[#E2012D] text-white py-2 lg:py-3 px-12 w-80 mt-12 flex justify-between items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-2xl lg:text-3xl uppercase tracking-widest">
            REIMBURSEMENT &nbsp; &nbsp; X{" "}
            </button>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

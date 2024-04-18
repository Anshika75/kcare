import React, { useState } from "react";
import logo from "../assets/logo.png";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#fefefe] fixed  z-40 shadow-md w-full text-[#4396A2] poppins-medium p-2 lg:p-5 px-[25px] lg:px-[50px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={logo}
              alt=""
              className=" h-6 lg:h-8"
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center text-lg">
          <ul className="flex">
            <li>
              <a
                href="#home"
                className="p-3 mr-4 uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="p-3 mr-4 uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#sevents"
                className="p-3 mr-4 uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Departments
              </a>
            </li>
            <li>
              <a
                href="#sachievements"
                className="p-3 mr-4 uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#partner"
                className="p-3 mr-4 uppercase hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Login button for laptop/desktop */}
        <div className="hidden lg:flex items-center justify-center text-2xl">
          <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="" className="grid place-items-center mx-2 transition-all hover:scale-90">
            <i className="fa-solid fa-phone text-xl"></i>
          </a>
        </div>

        {/* Mobile navigation button */}
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <i className="text-2xl fa-solid fa-xmark"></i>
          ) : (
            <i className="text-2xl fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden py-4 space-y-4 text-xl mt-3 w-full text-[#4396A2]">
        <ul className="w-full">
            <li className="w-full hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer my-2 p-2">
              <a
                href="#home"
                className="uppercase"
              >
                Home
              </a>
            </li>
            <li className="w-full hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer my-2 p-2">
              <a
                href="#about"
                className="uppercase"
              >
                About
              </a>
            </li>
            <li className="w-full hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer my-2 p-2">
              <a
                href="#sevents"
                className="uppercase"
              >
                Departments
              </a>
            </li>
            <li className="w-full hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer my-2 p-2">
              <a
                href="#sachievements"
                className="uppercase"
              >
                Services
              </a>
            </li>
            <li className="w-full hover:bg-[#4396A2] hover:text-[#fefefe] transition-all cursor-pointer my-2 p-2">
              <a
                href="#partner"
                className="uppercase"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

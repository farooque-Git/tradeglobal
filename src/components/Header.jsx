import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [navIcon, setNavIcon] = useState(false);

  return (
    <div className="flex bg-black justify-between items-center w-full pt-2 h-14 px-4 fixed z-10">
      {/* Logo */}
      <div>
        <RouterLink
          to="/"
          className="text-slate-400 font-bold ml-10 p-2 text-xl"
        >
          Trade Global
        </RouterLink>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex md:items-center">
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <RouterLink to="/" className="hover:text-white">
            Home
          </RouterLink>
        </li>
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <RouterLink to="/platform" className="hover:text-white">
            Platform
          </RouterLink>
        </li>
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <RouterLink to="/about-us" className="hover:text-white">
            About Us
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/register"
            className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Open an Account
          </RouterLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNavIcon(!navIcon)}
        className="cursor-pointer pr-4 z-10 text-gray-500 mt-3 md:hidden"
      >
        {navIcon ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Navigation Links */}
      {navIcon && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <RouterLink
              onClick={() => setNavIcon(!navIcon)}
              to="/"
              className="hover:text-white"
            >
              Home
            </RouterLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <RouterLink
              onClick={() => setNavIcon(!navIcon)}
              to="/platform"
              className="hover:text-white"
            >
              Platform
            </RouterLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <RouterLink
              onClick={() => setNavIcon(!navIcon)}
              to="/about-us"
              className="hover:text-white"
            >
              About Us
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/register"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Open an Account
            </RouterLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

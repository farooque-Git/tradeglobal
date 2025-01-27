import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { logout } from "../redux/slices/authSlice";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [navIcon, setNavIcon] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginLogout = async () => {
    if (user) {
      try {
        await doSignOut();
        dispatch(logout());
        navigate("/");
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    } else {
      navigate("/login");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

        {/* Display Login/Logout button */}
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          {user ? (
            <button
              onClick={handleLoginLogout}
              className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <RouterLink to="/login" className="hover:text-white">
              Login
            </RouterLink>
          )}
        </li>

        {/* Conditionally render user name and "Open an Account" button */}
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          {user ? (
            <div className="relative flex items-center space-x-4 text-3xl">
              <CgProfile onClick={toggleDropdown} className="cursor-pointer" />
              {dropdownOpen && (
                <div className="absolute right-0 text-sm pt-10 w-60 bg-white text-black rounded-md shadow-lg">
                  <p className="px-4 ">{user.displayName}</p>
                  <RouterLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Profile
                  </RouterLink>
                  <button
                    onClick={handleLoginLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <RouterLink
              to="/register"
              className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Open an Account
            </RouterLink>
          )}
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

          {/* Display user info or Open Account button */}
          <li>
            {user ? (
              <div className="flex flex-col items-center space-y-4">
                <p className="text-white text-xl">{user.displayName}</p>
                <button
                  onClick={handleLoginLogout}
                  className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <RouterLink
                to="/register"
                onClick={() => setNavIcon(!navIcon)}
                className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Open an Account
              </RouterLink>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

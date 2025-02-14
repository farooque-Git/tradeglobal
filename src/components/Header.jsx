import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { logout } from "../redux/slices/authSlice";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [navIcon, setNavIcon] = useState(false);
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

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

  const toggleClientDropdown = () => {
    setClientDropdownOpen((prevState) => !prevState);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prevState) => !prevState);
  };

  // Close dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clientDropdownRef.current &&
        !clientDropdownRef.current.contains(event.target)
      ) {
        setClientDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex text-white bg-black justify-between items-center w-full pb-2 h-16 md:px-36 fixed z-10">
      <div>
        <RouterLink
          to="/"
          className="font-bold ml-10 p-2  sm:text-lg md:text-xl"
        >
          Centrio Global Ltd
        </RouterLink>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex md:items-center">
        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium hover:scale-105 duration-200">
          <RouterLink to="/" className="hover:text-white">
            Trading
          </RouterLink>
        </li>

        {/* <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium hover:scale-105 duration-200">
          Platform
        </li> */}

        {/* "For Clients" Dropdown */}
        <li
          className="relative px-1 mt-2 mr-8 cursor-pointer capitalize font-medium hover:scale-105 duration-200 group"
          onClick={toggleClientDropdown}
        >
          <RouterLink to="#" className="hover:text-white">
            For Clients
          </RouterLink>

          {/* Client Dropdown with 3 Columns */}
          {clientDropdownOpen && (
            <div
              ref={clientDropdownRef}
              className="absolute left-0 bg-white text-black text-sm rounded-md shadow-lg mt-2 w-96 grid grid-cols-3 gap-4 p-4"
            >
              {/* Column 1 */}
              <div>
                <RouterLink
                  to="/economic-calender"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Economic Calender
                </RouterLink>
                <RouterLink
                  to="/forex-sentiment"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Forex Sentiment
                </RouterLink>
                <RouterLink
                  to="/market-newTV"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Market New TV
                </RouterLink>
                <RouterLink
                  to="/forex-calculator"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Forex Calculator
                </RouterLink>
              </div>

              {/* Column 2 */}
              <div>
                <RouterLink
                  to="/forex-news"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  New to Forex
                </RouterLink>
                <RouterLink
                  to="/forex-basic"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Forex Basic
                </RouterLink>
                <RouterLink
                  to="/successfull-trader"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Successful Trader
                </RouterLink>
                <RouterLink
                  to="/trading-principle"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Trading Principle
                </RouterLink>
              </div>

              {/* Column 3 */}
              <div>
                <RouterLink
                  to="/introducing-broker"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Introducing Broker
                </RouterLink>
                <RouterLink
                  to="/pamm-manager"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  PAMM Manager
                </RouterLink>
                <RouterLink
                  to="/multi-acc-manager"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  Multi Account Manager
                </RouterLink>
                <RouterLink
                  to="/white-label"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setClientDropdownOpen(false)}
                >
                  White Label
                </RouterLink>
              </div>
            </div>
          )}
        </li>

        <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium hover:scale-105 duration-200">
          <RouterLink to="/about-us" className="hover:text-white">
            About Us
          </RouterLink>
        </li>

        {/* User Login/Logout Button */}
        <li className="mt-2 mr-2 cursor-pointer capitalize text-sm hover:scale-105 duration-200">
          {user ? (
            <div className=""></div>
          ) : (
            <RouterLink to="/login" className="border rounded-2xl py-1 px-4 ">
              Client Portal
            </RouterLink>
          )}
        </li>
      </ul>

      {/* Profile Dropdown */}
      <div className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
        {user ? (
          <div className="relative flex items-center space-x-4 text-2xl sm:text-xl md:text-3xl">
            <CgProfile
              onClick={toggleProfileDropdown}
              className="cursor-pointer pb-2"
            />
            {profileDropdownOpen && (
              <div
                ref={profileDropdownRef}
                className="absolute right-0 text-sm sm:text-xs pt-2 w-48 sm:w-56 md:w-60 bg-white text-black rounded-md shadow-lg"
                style={{ top: "100%", maxHeight: "300px", overflowY: "auto" }} // Added scroll if content overflows
              >
                <p className="px-4">{user.displayName}</p>
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
            className="text-white w-fit rounded-3xl px-4 sm:px-6 py-2 my-2 pb-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm sm:text-base"
          >
            Open Account
          </RouterLink>
        )}
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={() => setNavIcon(!navIcon)}
        className="cursor-pointer pr-4 z-10 text-gray-500 mt-3 md:hidden"
      >
        {navIcon ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Navigation Links */}
      {navIcon && (
        <ul className="flex flex-col pt-10 pl-10 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-semibold text-3xl hover:scale-105 duration-200">
            <RouterLink
              to="/"
              onClick={() => setNavIcon(!navIcon)}
              className="hover:text-white"
            >
              Trading
            </RouterLink>
          </li>
          {/* 
          <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-semibold text-3xl hover:scale-105 duration-200">
            Platform
          </li> */}

          {/* "For Clients" Dropdown for Mobile */}
          <li
            className="relative px-1 mt-2 mr-8 cursor-pointer capitalize font-semibold text-3xl hover:scale-105 duration-200"
            onClick={toggleClientDropdown}
          >
            <RouterLink to="#" className="hover:text-white">
              For Clients
            </RouterLink>
            {clientDropdownOpen && (
              <div
                ref={clientDropdownRef}
                className=" left-0  text-lg shadow-lg mt-2 w-full p-4"
                style={{ maxHeight: "300px", overflowY: "auto" }} // Added scroll if content overflows
              >
                <RouterLink
                  to="/economic-calender"
                  className="block px-2 py-2 hover:text-white "
                  onClick={() => {
                    setClientDropdownOpen(false);
                    setNavIcon(false);
                  }}
                >
                  Economic Calender
                </RouterLink>
                <RouterLink
                  to="/forex-sentiment"
                  className="block px-2 py-2 hover:text-white"
                  onClick={() => {
                    setClientDropdownOpen(false);
                    setNavIcon(false);
                  }}
                >
                  Forex Sentiment
                </RouterLink>
                <RouterLink
                  to="/market-newTV"
                  className="block px-2 py-2 hover:text-white"
                  onClick={() => {
                    setClientDropdownOpen(false);
                    setNavIcon(false);
                  }}
                >
                  Market New TV
                </RouterLink>
                <RouterLink
                  to="/forex-calculator"
                  className="block px-2 py-2 hover:text-white"
                  onClick={() => {
                    setClientDropdownOpen(false);
                    setNavIcon(false);
                  }}
                >
                  Forex Calculator
                </RouterLink>
              </div>
            )}
          </li>

          <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-semibold text-3xl hover:scale-105 duration-200">
            <RouterLink
              to="/about-us"
              onClick={() => setNavIcon(!navIcon)}
              className="hover:text-white"
            >
              About Us
            </RouterLink>
          </li>

          {/* User Login/Logout Button */}
          <li className="px-1 mt-2 mr-8 cursor-pointer capitalize font-semibold text-3xl hover:scale-105 duration-200">
            {user ? (
              <div className="text-green-500">{user.displayName}</div>
            ) : (
              <RouterLink
                to="/login"
                onClick={() => setNavIcon(!navIcon)}
                className=" hover:text-white"
              >
                Client Portal
              </RouterLink>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

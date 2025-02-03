import React from "react";
import { Link } from "react-router-dom";

const TradeApp = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[80vh] bg-white px-6 sm:px-12 md:px-40 py-10 md:py-0">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Trade Anywhere, Anytime
        </h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#6674cc] pt-4">
          MetaTrader 5
        </h1>
        <ul className="pl-5 pb-6 text-sm sm:text-base">
          <li>Multi asset</li>
          <li>3 Chart (Line, Bar, and Candlesticks)</li>
          <li>Micro lot available</li>
        </ul>
        <Link target="_blank" to="https://www.metatrader5.com/en/download">
          <button className="text-white w-full md:w-fit px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition duration-300">
            Download Now
          </button>
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-64 sm:w-80 md:w-auto h-auto hover:scale-105 transition duration-200"
          src="https://www.centrioglobal.com/wp-content/uploads/2023/11/banner-img-platform.svg"
          alt="home"
        />
      </div>
    </div>
  );
};

export default TradeApp;

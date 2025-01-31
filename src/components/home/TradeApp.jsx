import React from "react";
import { Link } from "react-router-dom";

const TradeApp = () => {
  return (
    <div className="flex h-[80vh]  bg-white px-40">
      <div className="flex-1 rounded-lg mr-5">
        <h3 className="text-4xl">Trade Anywhere, Anytime</h3>
        <h1 className="text-4xl text-[#6674cc] pt-4">MetaTrader 5 </h1>
        <ul className="pl-5 pb-10">
          <li>Multi asset</li>
          <li>3 Chart(line,bar and Candlsticks)</li>
          <li>Micro lot available</li>
        </ul>
        <Link target="_blank" to="https://www.metatrader5.com/en/download">
          <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Download Now
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center text-lg pt-[-20] hover:scale-105 duration-200">
        <img
          height="350px"
          src="https://www.centrioglobal.com/wp-content/uploads/2023/11/banner-img-platform.svg"
          alt="home"
        />
      </div>
    </div>
  );
};

export default TradeApp;

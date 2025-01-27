import React from "react";
import { Link } from "react-router-dom";

const TradeApp = () => {
  return (
    <div className="flex h-[80vh] pl-14 bg-white">
      <div className="flex-1 rounded-lg mr-5">
        <h3 className="text-4xl">Trade Anywhere, Anytime</h3>
        <h1 className="text-4xl text-[#6674cc] pt-4">MetaTrader 5 </h1>
        <ul className="pl-5 pb-10">
          <li>Multi asset</li>
          <li>3 Chart(line,bar and Candlsticks)</li>
          <li>Micro lot available</li>
        </ul>
        <Link to="/_blank">
          <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Download Now
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center text-lg">
        <img
          height="350px"
          src="https://media1.giphy.com/media/lTXepVrUf7XBoBGgzW/giphy.gif?cid=6c09b952c9prnnfieibz6mpdm7hq64i6hlg9zi14u8qboefs&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="home"
        />
      </div>
    </div>
  );
};

export default TradeApp;

import React from "react";
import backgroundImage from "../../images/economic.avif";

const EconomicCalender = () => {
  return (
    <div>
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center  hover:scale-105 duration-300 ">
            Economic Calender
          </h1>
          <p className="text-white pt-[-6]">
            {" "}
            Keep an eye on market moving news events
          </p>
          {/* <button className="bg-transparent border border-white rounded-[25px] px-6 py-3 text-white font-bold hover:bg-emerald-200 hover:text-black transition-colors duration-300">
          Escape the Matrix
        </button> */}
        </div>
      </div>
      <div className="bg-blue-700 text-center px-44 pb-7 text-white">
        <h1 className="text-3xl   font-bold py-7">
          Explore upcoming global events that impact the markets
        </h1>
        <p className="">
          An important tool for short and long-term traders, and investors
          alike, the Centrio Global economic calendar can help you decide
          <br />
          whether to stay on the sidelines or whether to load up and take a
          position, capitalising on news-driven volatility.
        </p>
      </div>
    </div>
  );
};

export default EconomicCalender;

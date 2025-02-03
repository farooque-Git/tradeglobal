import React from "react";
import backgroundImage from "../../images/economic.avif";

const EconomicCalender = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8 p-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center hover:scale-105 duration-300">
            Economic Calendar
          </h1>
          <p className="text-white pt-[-6] text-sm sm:text-base md:text-lg">
            Keep an eye on market-moving news events
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-blue-700 text-center px-4 sm:px-12 md:px-44 pb-7 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-7">
          Explore upcoming global events that impact the markets
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          An important tool for short and long-term traders, and investors
          alike, the Centrio Global economic calendar can help you decide
          whether to stay on the sidelines or whether to load up and take a
          position, capitalizing on news-driven volatility.
        </p>
      </div>
    </div>
  );
};

export default EconomicCalender;

import React from "react";

const ForexCalculator = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.moneycontrol.com/static-mcnews/2023/02/stocks_nifty_sensex.jpg?impolicy=website&width=1280&height=720)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 px-4">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center hover:scale-105 duration-300">
            FOREX TRADING CALCULATORS
          </h1>
          <p className="text-white pt-[-6] text-sm sm:text-base md:text-lg">
            Trade with precision using our range of calculators
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-blue-700 text-center px-4 sm:px-12 md:px-44 pb-7 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-7">
          Centrio Global Forex Calculators
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Make smarter trading decisions and find key price levels by taking
          advantage of the Centrio Global Forex calculators. All values are
          calculated in real-time based on live market prices.
        </p>
      </div>
    </div>
  );
};

export default ForexCalculator;

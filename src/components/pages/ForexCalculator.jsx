import React from "react";

const ForexCalculator = () => {
  return (
    <div>
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.moneycontrol.com/static-mcnews/2023/02/stocks_nifty_sensex.jpg?impolicy=website&width=1280&height=720)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center hover:scale-105 duration-300">
            FOREX TRADING CALCULATORS
          </h1>
          <p className="text-white pt-[-6]">
            Trade with precision using our range of calculators
          </p>
        </div>
      </div>
      <div className="bg-blue-700 text-center px-44 pb-7 text-white">
        <h1 className="text-3xl font-bold py-7">
          Centrio Global Forex Calculators
        </h1>
        <p>
          Make smarter trading decisions and find key price levels by taking
          advantage of the Centrio Global Forex calculators. All values
          <br />
          are calculated in real-time based on live market prices.
        </p>
      </div>
    </div>
  );
};

export default ForexCalculator;

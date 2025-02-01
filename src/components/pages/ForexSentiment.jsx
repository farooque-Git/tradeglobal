import React from "react";

const ForexSentiment = () => {
  return (
    <div>
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/stock-exchange-trading-forex-finance-graphic-concept_53876-122999.jpg?t=st=1738398954~exp=1738402554~hmac=aa8075101ae040393c20f439f4d03b68ca1485440c536116a71dd49c002e9e3c&w=740)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center hover:scale-105 duration-300">
            TECHNICAL RATING INDICATOR
          </h1>
          <p className="text-white pt-[-6]">Technical Rating Indicator</p>
        </div>
      </div>
      <div className="bg-blue-700 text-center px-44 pb-7 text-white">
        <h1 className="text-3xl font-bold py-7">
          View buy or sell ratings across thousands of instruments
        </h1>
        <p>
          Centrio Global’s technical analysis ratings are a vital tool for any
          trader, <br />
          because it combines a summary of buy and sell signals based on several
          technical indicators.
          <br />
          Regardless of whether your like to trade FX, Indices, or any other
          markets, give your edge
          <br />a boost with the Centrio Global Technical Rating Indicator.
        </p>
      </div>
    </div>
  );
};

export default ForexSentiment;

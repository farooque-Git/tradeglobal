import React from "react";

const MarketNews = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-80 sm:h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://rukminim2.flixcart.com/image/850/1000/l0lbrm80/poster/n/o/b/medium-nasdaq-stock-market-new-york-travel-world-on-fine-art-original-imagcbrmgzctzq8g.jpeg?q=90&crop=false)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-6 sm:space-y-8 p-4">
          <h1 className="text-white text-xl sm:text-4xl md:text-6xl font-bold text-center hover:scale-105 duration-300">
            MARKET NEWS
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg pt-[-6]">
            Daily Coverage of Global Financial Markets
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-blue-700 text-center px-4 sm:px-12 md:px-44 pb-7 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-7">
          Explore upcoming global events that impact the markets
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          From the trading floor of the New York Stock Exchange, WebTV offers
          trading insights <br />
          combined with the latest industry news!
        </p>
      </div>
    </div>
  );
};

export default MarketNews;

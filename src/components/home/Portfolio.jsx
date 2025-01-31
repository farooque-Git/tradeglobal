import { useState } from "react";

const PortfolioSection = () => {
  const [selectedTab, setSelectedTab] = useState("Stocks");

  return (
    <div className="bg-[#0b0c1e] text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Diversify your portfolio</h2>
        <p className="text-gray-400 mt-2">
          Discover thousands of assets, share ideas, discuss strategies and
          beyond
        </p>

        {/* Tabs Section */}
        <div className="flex justify-center gap-4 mt-6">
          {["Stocks", "Crypto", "ETFs"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-lg font-semibold rounded-md ${
                selectedTab === tab
                  ? "bg-[#f59e0b] text-black"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-12">
        {/* Left Side Text */}
        <div className="max-w-lg">
          <h3 className="text-3xl font-semibold">Invest in {selectedTab}.</h3>
          <p className="text-gray-400 mt-4">
            {selectedTab === "Stocks" &&
              "Invest in your favourite stocks.Enjoy 0% commission and fractional shares"}
            {selectedTab === "Crypto" &&
              "Buy crypto on an easy-to-use platform. Bitcoin, Ethereum, and 60+ other crypto assets at your fingertips"}
            {selectedTab === "ETFs" &&
              "Invest for the long term with a variety of ETFs. Diversify your portfolio and pay 0% commission."}
          </p>
          <button className="mt-6 px-6 py-3 bg-[#f59e0b] text-black rounded-md font-semibold">
            Start Investing →
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative w-80 mt-8 md:mt-0">
          <img
            src="https://t3.ftcdn.net/jpg/06/86/67/50/360_F_686675090_RiGX4mnam2uOTITQWNNrGRRU7LO4eMzL.jpg" // Replace with actual image URL
            alt="Investment"
            className="rounded-lg"
          />
          {/* Floating Stats */}
          <div className="absolute top-6 left-6 bg-gray-900 bg-opacity-70 px-3 py-2 rounded-md">
            <p className="text-xs text-gray-400">Investors Trend</p>
            <p className="text-lg font-semibold animate-increase">15.39%</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-gray-900 bg-opacity-70 px-4 py-3 rounded-md text-lg font-bold">
            0%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

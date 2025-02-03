import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

const InvestmentSection = () => {
  const projects = [
    {
      id: 1,
      icon: <TbCircleNumber1Filled />,
      name: "Register",
      description:
        "Signup for a Centrio Global account and get access to world-class pricing.",
    },
    {
      id: 2,
      icon: <TbCircleNumber2Filled />,
      name: "Verify your Identity",
      description:
        "Complete the identity verification process to secure your account and transactions.",
    },
    {
      id: 3,
      icon: <TbCircleNumber3Filled />,
      name: "Start Trading",
      description:
        "You're good to go. Trade 300+ markets across forex, crypto, stocks, commodities.",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
      {/* Left Content */}
      <div className="w-full max-w-lg text-center md:text-left">
        <h1 className="text-lg sm:text-xl text-yellow-300 font-semibold">
          Trader Celebrate $40+ Million Profits
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mt-2">
          Your Gateway to Financial Triumph Starts with Your Unique Trading
          Portfolio
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          {projects.map(({ id, icon, name, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex items-start p-5"
            >
              <div className="text-4xl text-blue-300">{icon}</div>
              <div className="ml-4">
                <p className="text-base sm:text-lg font-semibold text-blue-300">
                  {name}
                </p>
                <p className="text-sm sm:text-base text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full max-w-md flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/3d-mobile-phone-mock-up-online-forex-trading-sales-theme-dark-big-depth-background_816702-2619.jpg"
          alt="Investment"
          className="rounded-lg shadow-lg w-full sm:w-96"
        />
        {/* Floating Text Box */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md text-black text-sm">
          <span className="font-bold">
            Support when you need it — Investors trend
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;

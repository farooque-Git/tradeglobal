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
        "Signup for an Centrio Global account and get access to world class pricing",
    },
    {
      id: 2,
      icon: <TbCircleNumber2Filled />,
      name: "Verify your Identity",
      description:
        "Complete the identity verification process to secure your account and transactions",
    },
    {
      id: 3,
      icon: <TbCircleNumber3Filled />,
      name: "Start Trading",
      description:
        "You're good to go. Trade 300+ markets across forex, crypto, stocks, commodities",
    },
  ];

  return (
    <div className="bg-[#0a0a1a] text-white py-16 px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="max-w-lg font-semibold">
        <h1 className="mt-6 text-lg text-yellow-300">
          Trader Celebrate $40+ Million Profits
        </h1>
        <h2>
          Your Gateway to Financial Triumph Starts with your Unique Trading
          Portfolio
        </h2>
        <div className="grid sm:grid-cols-1 gap-8 px-12 sm:px-0 mt-10">
          {projects.map(({ id, icon, name, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-start p-5"
            >
              <div className="flex gap-3">
                <div className="text-3xl  mb-4">{icon}</div>
                <div className="text-left text-sm">
                  <p className="text-blue-300 text-base font-semibold">
                    {name}
                  </p>
                  <p className="text-gray-300">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[400px] h-[300px] flex items-center justify-center">
        <img
          src="https://w7.pngwing.com/pngs/786/671/png-transparent-smartphone-act-forex-inc-foreign-exchange-market-binary-option-trader-smartphone-gadget-electronics-mobile-phone.png"
          alt="Investment"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute bottom-10 left-8 bg-white p-3 rounded-md shadow-md text-black text-sm">
          📈 <span className="font-bold">15.39%</span> Investors trend
        </div>
        <div className="absolute top-5 right-5 bg-white p-3 rounded-md shadow-md text-black text-sm">
          EOS Score <span className="font-bold">42</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;

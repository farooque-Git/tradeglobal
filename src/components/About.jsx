import React from "react";
import { VscGraph } from "react-icons/vsc";
import { GiHammerDrop } from "react-icons/gi";

const About = () => {
  const features = [
    {
      icon: <VscGraph />,
      description:
        "Centrio Global Limited offers Contracts for Difference (CFDs) on 6 asset classes: Forex, Shares, Spot Indices, Futures, Spot Metals and Spot Energy. We provide our clients with access to top-tier liquidity and advanced trade execution with no dealing desk intervention.",
    },
    {
      icon: <GiHammerDrop />,
      description:
        "Centrio Global Limited is authorised and regulated by the FCA since 2010. Centrio Global Limited Financial Services Limited is authorised and regulated by the CySEC since 2007 and by the FSCA since 2015. Centrio Global Limited is authorised and regulated by the SCB.",
    },
  ];

  const brokers = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXrPf91X1PAA1ovjF6uRb0rEtnjFR7SfsOw&s",
      title: "Financial Conduct",
      description:
        "Centrio Global Limited is authorized and regulated by the Financial Conduct Authority (registration no. 509756)",
    },
    {
      img: "https://www.centrioglobal.com/wp-content/uploads/2023/12/cy@2x.webp",
      title: "Cyprus Securities",
      description:
        "Centrio Global Limited is authorised and regulated by the Cyprus Securities and Exchange Commission (licence no. 079/17).",
    },
    {
      img: "https://www.centrioglobal.com/wp-content/uploads/2023/12/ba@2x.webp",
      title: "authorised and regulated by",
      description:
        "Centrio Global Limited is authorised and regulated by the Securities Commission of The Bahamas (license no. SIA-G116).",
    },
    {
      img: "https://www.centrioglobal.com/wp-content/uploads/2023/12/cy@2x.webp",
      title: "Financial Sector",
      description:
        "Centrio Global Limited is authorised by the Financial Sector Conduct Authority ('FSCA') (authorisation no. 46151)",
    },
  ];

  return (
    <div>
      <div
        className="h-96 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/01/84/91/27/360_F_184912716_qwpfSzNyX8BGtsXHJTgpTmaPCOPEwhRd.jpg)",
        }}
      >
        <div className="absolute inset-0 pt-10 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-bold hover:scale-105 duration-300">
            We help Forex traders make the most profitable and efficient{" "}
            <br className="hidden md:block" /> trading decisions. Experience it
            for yourself.
          </h1>
          <button className="bg-transparent border border-white rounded-full px-6 py-2 text-white font-bold hover:bg-white hover:text-black transition-colors duration-300">
            Start Trading
          </button>
          <p className="text-white text-sm"> *T&C apply</p>
        </div>
      </div>
      <div className="text-center px-4 md:px-20 lg:px-44 pb-7 text-black">
        <h1 className="text-lg md:text-xl font-bold py-7">
          Ever since our establishment, Centrio Global has successfully expanded
          to serve retail and institutional clients in more than 170 countries -
          and we are still growing.
        </h1>

        {/* Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-4 md:px-10 bg-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-5 bg-[#0B1E56] text-white rounded-b-2xl">
                <h2 className="text-lg font-bold ">{feature.icon}</h2>
                <p className="text-sm text-gray-300 mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Broker Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 py-10 bg-white">
        {brokers.map((broker, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={broker.img}
              alt={broker.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-5 bg-[#0B1E56] text-white rounded-b-2xl">
              <p className="text-sm text-gray-300 mt-2">{broker.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="flex justify-center items-center w-full p-6">
        <div className="w-full md:w-3/4 lg:w-1/2 p-6 shadow-lg rounded-lg">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/899030923?h=6b23f2d100"
            width="100%"
            height="360"
            className="rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;

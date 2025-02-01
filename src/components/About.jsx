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
        <div className="absolute inset-0 pt-10 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-8">
          <h1 className="text-white text-xl sm:text-4xl md:text-3xl font-bold text-center  hover:scale-105 duration-300 ">
            We help Forex traders make the most profitable and efficient <br />{" "}
            trading decisions. Experience it for yourself.
          </h1>
          <button className="bg-transparent border border-white rounded-[25px] px-6 py-3 text-white font-bold hover:bg-emerald-200 hover:text-black transition-colors duration-300">
            Start Trading
          </button>
          <p className="text-white pt-[-20]"> *T&C apply</p>
        </div>
      </div>
      <div className=" text-center px-44 pb-7 text-white">
        <h1 className="text-xl text-black  font-bold py-7">
          Ever since our establishment, Centrio Global has <br /> successfully
          expanded to serve retail <br /> and institutional clients in more than
          170 countries <br /> - and we are still growing.
        </h1>

        {/* feature */}
        <div className="flex justify-center items-center gap-6 py-10 px-4 md:px-10 bg-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px]  bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-5 bg-[#0B1E56] text-white rounded-b-2xl">
                <h2 className="text-lg font-bold ">{feature.icon}</h2>
                <p className="text-sm text-gray-300 items-start mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Broker */}
      <div className="flex justify-center pl-32 pr-32  h-96 items-center gap-6 py-10 md:px-10 bg-white">
        {brokers.map((brokers, index) => (
          <div
            key={index}
            className="w-[300px] md:w-[350px] h-96 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={brokers.img}
              alt={brokers.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-5 bg-[#0B1E56] text-white rounded-b-2xl">
              <p className="text-sm text-gray-300 mt-2">
                {brokers.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="flex justify-center items-center w-full h-full p-6">
        <div className="w-full md:w-1/2 p-6 shadow-lg rounded-lg">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/899030923?h=6b23f2d100"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;

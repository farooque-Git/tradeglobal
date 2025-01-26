import { React } from "react";
import { RiStockFill } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";
import { BsGraphUpArrow, BsCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Service = () => {
  const icons = [
    {
      id: 1,
      icon: <RiStockFill />,
      title: "Spread form",
      description: "0.01 Pips",

      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: <RxTimer />,
      title: "Trade Execution",
      description: "-1ms",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: <BsGraphUpArrow />,
      title: "Instrument",
      description: "200+",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: <BsCoin />,
      title: "On Deposits",
      description: "$0 Fee",

      style: "shadow-blue-600",
    },
    {
      id: 5,
      icon: <BiSupport />,
      title: "Our Support",
      description: "24/7",
      style: "shadow-white",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl  font-bold text-gray-400 p-2 inline">
            Your Trust, Our Commitment
          </p>
          <p className="pt-10">Proudly Serving the Community Since 2012:</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, icon, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="mt-4 flex justify-center text-6xl">{icon}</p>

              <p className="mt-4 text-yellow-500">{description}</p>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

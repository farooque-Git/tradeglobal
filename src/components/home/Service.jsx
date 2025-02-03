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
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-12">
      {/* Text Content */}
      <div className="max-w-screen-lg mx-auto px-4 text-center text-white">
        <p className="text-3xl sm:text-4xl font-bold text-gray-400 p-2">
          Your Trust, Our Commitment
        </p>
        <p className="pt-6 text-sm sm:text-base">
          Proudly Serving the Community Since 2012:
        </p>
      </div>

      {/* Service Grid */}
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {icons.map(({ id, icon, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 transition duration-500 py-4 rounded-lg ${style}`}
            >
              <div className="flex justify-center text-5xl sm:text-6xl">
                {icon}
              </div>
              <p className="mt-3 text-yellow-500 text-sm sm:text-base">
                {description}
              </p>
              <p className="mt-2 text-xs sm:text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center items-center px-4 py-8">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/899030923?h=6b23f2d100"
              className="w-full h-56 sm:h-72 md:h-96 rounded-lg shadow-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

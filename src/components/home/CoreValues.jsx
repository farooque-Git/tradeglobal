import { MdMailLock, MdArrowCircleRight, MdThumbUp } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";

const CoreValues = () => {
  const projects = [
    {
      id: 1,
      icon: <MdMailLock />,
      name: "Protected & Secure",
      description:
        "Your data is safe and your funds are kept in segregated bank accounts, in accordance with regulatory requirements.",
    },
    {
      id: 2,
      icon: <MdArrowCircleRight />,
      name: "Reliable",
      description:
        "Centrio Global Ltd is a FTSE 250 company listed on the London Stock Exchange’s Main Market for Listed Companies.",
    },
    {
      id: 3,
      icon: <MdThumbUp />,
      name: "Regulated",
      description:
        "Licensed and regulated by a variety of global leading regulators.",
    },
    {
      id: 4,
      icon: <GiLaptop />,
      name: "Professional Support",
      description:
        "Get around-the-clock dedicated customer service in multiple languages.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <p className="text-3xl sm:text-4xl font-bold text-gray-400 border-b-4 border-gray-500 inline-block pb-2">
          Core Values
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(({ id, icon, name, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex p-4 sm:p-6 gap-4 items-center"
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl text-blue-300">{icon}</div>

              {/* Text Content */}
              <div>
                <p className="text-lg sm:text-xl font-semibold text-blue-300">
                  {name}
                </p>
                <p className="text-sm sm:text-base text-gray-300 mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

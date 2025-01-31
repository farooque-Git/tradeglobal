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

  // md:h-screen
  return (
    <div
      className="bg-gradient-to-b from-black to-gray-800 w-full
     text-white h-screen"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"></p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, icon, name, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex p-3"
            >
              <div className="grid-flow-row m-auto">
                <p className="flex justify-center text-6xl ">{icon}</p>
              </div>
              <div className="mt-3 pr-2">
                <p className="px-5 text-blue-300 text-base font-semibold ">
                  {name}
                </p>

                <p className="pl-5 ">
                  <span className="font-thin">{description}</span>
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

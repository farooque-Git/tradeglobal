import { MdOutlineDoubleArrow } from "react-icons/md";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            $40+ Million Profits Made by
            <br />
            Trade with Us!
          </h1>
          <p className="text-gray-400 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            maxime reprehenderit ab vel, ullam quasi, ex totam eligendi soluta
            officia recusandae ratione, porro sit! Nemo dignissimos nulla neque
            laborum! Id.
          </p>
          <div>
            <button
              target="_blank"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Open your Account
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

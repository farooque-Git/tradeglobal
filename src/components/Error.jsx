import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-500 p-4">
      <h1 className="text-6xl md:text-9xl font-bold text-gray-100 text-center">
        404 Error
      </h1>
      <h2 className="text-2xl md:text-4xl text-gray-300 mt-4 text-center">
        Oops! Page not Found
      </h2>

      <div className="mt-8 md:mt-12">
        {/* Button to go back */}
        <button
          onClick={handleGoBack}
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          GO BACK!
        </button>
      </div>
    </div>
  );
};

export default Error;

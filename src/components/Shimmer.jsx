import React from "react";

const Shimmer = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-gray-800 to-gray-500">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Shimmer;

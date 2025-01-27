import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh]">
      <h4 className="text-5xl font-bold text-black mt-12">404 Error</h4>
      <h6 className="text-2xl text-red-600 mt-[-20px]">Uh oh! This page is lost in space!</h6>
      <img
        className="h-[150px] mt-8"
        src="https://img1.picmix.com/output/stamp/normal/3/3/8/9/2379833_beb75.gif"
        alt="Error image"
      />
      <button
        onClick={handleGoBack}
        className="mt-8 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg cursor-pointer transition-colors duration-200 hover:bg-indigo-800"
      >
        Start again!
      </button>
    </div>
  );
};

export default Error;

import React from "react";
import loading from "../../images/loading.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <img
        src={loading}
        alt="Loading..."
        className="w-48 sm:w-64 md:w-96 h-auto"
      />
    </div>
  );
};

export default Loading;

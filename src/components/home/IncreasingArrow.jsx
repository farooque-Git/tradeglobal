import React, { useState, useEffect, useRef } from "react";

// Reusable function to handle the increasing counter logic
const useIncreasingCounter = (
  initialValue,
  targetValue,
  intervalSpeed = 100
) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        }
        clearInterval(intervalRef.current);
        return prevCount;
      });
    }, intervalSpeed);

    return () => clearInterval(intervalRef.current);
  }, [targetValue, intervalSpeed]);

  return count;
};

const IncreasingNumber = () => {
  const count1 = useIncreasingCounter(0, 12, 100);
  const count2 = useIncreasingCounter(0, 60, 50);
  const count3 = useIncreasingCounter(0, 42, 50);
  const count4 = useIncreasingCounter(100, 180, 10);
  const count5 = useIncreasingCounter(0, 33, 50);
  const count6 = useIncreasingCounter(0, 500, 5);

  return (
    <div className="w-full py-12 px-6 bg-white text-center">
      {/* Title */}
      <p className="text-2xl sm:text-4xl font-bold text-gray-800">
        Proud to take care of your investment journey
      </p>

      {/* Counter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4 mt-10">
        {/* Column 1 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            {count1} years
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            in India and worldwide
          </p>
        </div>

        {/* Column 2 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            {count2}+
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            awards and counting
          </p>
        </div>

        {/* Column 3 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            +{count3}
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            trading accounts opened
          </p>
        </div>

        {/* Column 4 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            +{count4}
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            countries across the world
          </p>
        </div>

        {/* Column 5 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            ${count5}+mIn
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            bonus funds paid out
          </p>
        </div>

        {/* Column 6 */}
        <div className="min-w-[180px] sm:min-w-[250px]">
          <div className="text-blue-500 text-3xl sm:text-5xl font-bold">
            {count6}+
          </div>
          <p className="text-gray-500 text-sm sm:text-lg mt-2">
            Team worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncreasingNumber;

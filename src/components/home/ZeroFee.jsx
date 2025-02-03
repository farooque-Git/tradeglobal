import React from "react";

const ZeroFeeComponent = () => {
  const paymentMethods = [
    {
      name: "Bank Transfer",
      image: "https://cdn-icons-png.flaticon.com/512/349/349291.png",
    },
    {
      name: "VISA",
      image:
        "https://w7.pngwing.com/pngs/385/197/png-transparent-visa-flat-brand-logo-icon-thumbnail.png",
    },
    { name: "Mastercard", image: "" },
    { name: "AUD", image: "" },
    { name: "EUR" },
    { name: "USD", image: "" },
    { name: "JPY", image: "" },
    { name: "SGD", image: "" },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Zero Fee, Deposit & Withdraw
        </h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Deposit and trade instantly using our wide range of fee-free funding
          options. No withdrawal fees.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg shadow-sm bg-gray-800"
            >
              {/* <img
                src={method.image}
                alt={method.name}
                className="h-10 w-16 mr-2"
              /> */}
              <span className="text-md font-semibold text-white">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZeroFeeComponent;

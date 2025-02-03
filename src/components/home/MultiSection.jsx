import React from "react";

const MultiSection = () => {
  const icons = [
    {
      id: 1,
      icon: "https://png.pngtree.com/png-vector/20231031/ourmid/pngtree-chrome-dollar-sign-isolated-on-white-power-png-image_10374864.png",
      title: "Spread form",
      description: "Forex",
    },
    {
      id: 2,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmaLYgggbOvopNBzUp4ucEMFn8ZXaQwPSx5fSZWf8gwQkYvk3HP0hjoO0KTQ6_SUpp2A&usqp=CAU",
      title: "Trade Execution",
      description: "Metals",
    },
    {
      id: 3,
      icon: "https://as2.ftcdn.net/v2/jpg/02/22/48/57/1000_F_222485761_Vt9MdZrEbcX6mrWm0qOPrgs0e8dRm0g8.jpg",
      title: "Instrument",
      description: "Indices",
    },
    {
      id: 4,
      icon: "https://thumbs.dreamstime.com/b/commodities-oil-gold-silver-copper-corn-coal-wheat-coffee-beans-commodities-oil-gold-silver-copper-corn-coal-wheat-coffee-119432012.jpg",
      title: "On Deposits",
      description: "Commodities",
    },
    {
      id: 5,
      icon: "https://thumbs.dreamstime.com/b/silver-bull-bear-white-background-silver-bull-bear-standing-white-shiny-background-reflections-154667423.jpg",
      title: "Our Support",
      description: "Shares",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-12">
      {/* Wide Range of Products Section */}
      <div className="max-w-6xl mx-auto mb-12 bg-[#0B1E56] p-6 rounded-md">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center mb-12">
          Wide Range of Products
        </h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-center py-6">
          {icons.map(({ id, icon, description }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 bg-white py-2 rounded-lg"
            >
              <p className="mt-4 flex justify-center">
                <img
                  src={icon}
                  alt={description}
                  className="w-12 sm:w-16 h-12 sm:h-16"
                />
              </p>
              <p className="mt-4 font-bold text-sm sm:text-base">
                {description}
              </p>
              <a
                href={`#${description.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-500 hover:underline mt-2 text-xs sm:text-sm block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* We Keep Your Money Safe Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-6">
          We Keep Your Money Safe
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Gloren's Goodwill is constantly globally recommended for any part in
          each industry.
        </p>
      </div>

      {/* Trusted by Global Brands Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-6">
          Trusted by Global Brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["PICTET", "J.Safra Sarasin", "Conica", "Deutsche Bank"].map(
            (brand, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                  {brand}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSection;

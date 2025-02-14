const FeatureCards = () => {
  const features = [
    {
      img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
      title: "Integrated with Powerful Technology",
      description:
        "In-depth knowledge and vanguard technology – Centrio Global is the best choice!",
      buttonText: "Open Account",
      buttonLink: "/register",
    },
    {
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      title: "Guaranteed Personal Support",
      description:
        "With a team fluent in English, Hindi, Arabic and more. We serve you the best!",
      buttonText: "Account Types",
      buttonLink: "#",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 py-10 px-4 md:px-10 bg-white">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full sm:max-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <img
            src={feature.img}
            alt={feature.title}
            className="w-full h-[180px] object-cover"
          />

          {/* Content Section */}
          <div className="p-5 bg-[#0B1E56] text-white rounded-b-2xl">
            <h2 className="text-base sm:text-lg font-bold">{feature.title}</h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              {feature.description}
            </p>
            <a
              href={feature.buttonLink}
              className="block mt-4 bg-orange-500 text-white text-center py-2 w-full rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              {feature.buttonText} →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

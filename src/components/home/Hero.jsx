import { MdOutlineDoubleArrow } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXh8ZW58MHx8MHx8fDA%3D",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = () => {
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Loop infinitely
    speed: 800, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Change slide every 2 seconds
    arrows: false, // Hide arrows
    fade: false, // Disable fade effect (default is slide)
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="relative z-auto  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            $40+ Million Profits Made by
            <br />
            Trade with Us!
          </h1>
          <p className="text-white py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            maxime reprehenderit ab vel, ullam quasi, ex totam eligendi soluta
            officia recusandae ratione, porro sit! Nemo dignissimos nulla neque
            laborum! Id.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
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

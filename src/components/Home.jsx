import CoreValues from "./CoreValues";
import Hero from "./Hero";
import Service from "./Service";
import Footer from "./Footer";
import IncreasingNumber from "./IncreasingArrow";


const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <CoreValues />
      <IncreasingNumber />
      <Footer />
    </div>
  );
};

export default Home;

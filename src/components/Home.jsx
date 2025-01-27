import CoreValues from "./CoreValues";
import Hero from "./Hero";
import Service from "./Service";
import Footer from "./Footer";
import IncreasingNumber from "./IncreasingArrow";
import TradeApp from "./TradeApp";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <CoreValues />
      <IncreasingNumber />
      <TradeApp />
      <Footer />
    </div>
  );
};

export default Home;

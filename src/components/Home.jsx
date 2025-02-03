import Hero from "./home/Hero";
import Service from "./home/Service";
import CoreValues from "./home/CoreValues";
import IncreasingNumber from "./home/IncreasingArrow";
import TradeApp from "./home/TradeApp";
import Footer from "./Footer";
import FeatureComponent from "./home/FeatureComponent";
import ForexMatrix from "./home/ForexMatrix";
import PortfolioSection from "./home/Portfolio";
import ZeroFeeComponent from "./home/ZeroFee";
import InvestmentSection from "./home/Investement";
import MultiSection from "./home/MultiSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <CoreValues />

      <IncreasingNumber />
      <FeatureComponent />
      <MultiSection />
      <ForexMatrix />
      <TradeApp />
      <PortfolioSection />
      <ZeroFeeComponent />
      <InvestmentSection />
      <Footer />
    </div>
  );
};

export default Home;

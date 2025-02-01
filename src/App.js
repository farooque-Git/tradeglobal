import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Register from "./components/pages/Register";
import Error from "./components/Error";
import Login from "./components/pages/Login";
import Loading from "./components/pages/Loading";
import EconomicCalender from "./components/pages/EconomicCalender";
import ForexSentiment from "./components/pages/ForexSentiment";
import MarketNews from "./components/pages/MarketNew";
import ForexCalculator from "./components/pages/ForexCalculator";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {isLoading && <Loading />} {/* lazy loading */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/economic-calender" element={<EconomicCalender />} />
        <Route path="/forex-sentiment" element={<ForexSentiment />} />
        <Route path="/market-newTV" element={<MarketNews />} />
        <Route path="/forex-calculator" element={<ForexCalculator />} />

        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

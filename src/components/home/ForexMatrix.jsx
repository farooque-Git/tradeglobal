import { useState, useEffect } from "react";

const ForexMatrix = () => {
  const [forexData, setForexData] = useState({});
  const [prevData, setPrevData] = useState({});

  const currencies = ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"];
  const fetchForexData = async () => {
    try {
      const response = await fetch(
        "ttps://api.twelvedata.com/time_series?symbol=TEST_SYMBOL&interval=1day&apikey=YOUR_API_KEY"
      );
      const data = await response.json();

      if (data && data.rates) {
        setPrevData(forexData);
        setForexData(data.rates);
      }
    } catch (error) {
      console.error("Error fetching forex data:", error);
    }
  };

  useEffect(() => {
    fetchForexData();
    const interval = setInterval(fetchForexData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Ultra Low Spreads On More Than 200+ Trading Instruments
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Easy competitive spreads over fixed executives on other trading
          instruments.
        </p>
      </div>
      <h2 className="text-lg font-bold text-center text-white mb-4">
        Live Forex Rates
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-600 bg-black text-white">
          <thead>
            <tr className="bg-gray-900">
              <th className="border border-gray-700 p-2">Currencies</th>
              {currencies.map((cur) => (
                <th key={cur} className="border border-gray-700 p-2">
                  {cur}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currencies.map((base) => (
              <tr key={base} className="text-center">
                <td className="border border-gray-700 p-2">{base}</td>
                {currencies.map((quote) => {
                  if (base === quote) {
                    return (
                      <td
                        key={quote}
                        className="border border-gray-700 bg-gray-800"
                      ></td>
                    );
                  }

                  const prevPrice = prevData[quote] || forexData[quote] || 1;
                  const currentPrice = forexData[quote] || 1;
                  const priceChange = currentPrice - prevPrice;

                  return (
                    <td
                      key={quote}
                      className={`border border-gray-700 p-2 ${
                        priceChange > 0
                          ? "bg-green-500"
                          : priceChange < 0
                          ? "bg-red-500"
                          : "bg-gray-900"
                      }`}
                    >
                      {currentPrice.toFixed(4)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForexMatrix;

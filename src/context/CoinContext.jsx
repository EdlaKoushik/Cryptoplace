import { createContext, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey, // Use the API key from the environment variable
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );

      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        setAllCoin([]); // Set an empty array to avoid breaking the UI
        return;
      }

      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error("Fetch Error:", error);
      setAllCoin([]); // Set an empty array to avoid breaking the UI
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]); // Fetch data whenever the currency changes

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
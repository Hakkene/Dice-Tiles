import GameList from "../components/ListComponents/GameList";

import { useEffect, useState } from "react";

const MainScreen = () => {
  const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetchedproducts/");
        const data = await response.json();
        setFetchedProducts(data);
        console.log("Dane z API:", data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2 h-96 m-2">
        <h2>What's new?</h2>
        <GameList
          games={fetchedProducts.map((product) => ({
            title: product.name,
            thumbnail_url: product.thumbnail_url,
            description: product.description,
          }))}
        />
      </div>
      <div className="w-1/2 h-96 m-2">
        <h2>Top for this week</h2>
        <GameList
          games={fetchedProducts.map((product) => ({
            title: product.title,
            thumbnail_url: product.thumbnail_url,
            description: product.description,
          }))}
        />
      </div>
    </div>
  );
};

export default MainScreen;

import GameList from "../components/ListComponents/GameList";

import { useEffect, useState } from "react";

const MainScreen = () => {
  const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/api/products/?page=${currentPage}&page_size=10`;
        const response = await fetch(url);
        const data = await response.json();

        const products = data.results || [];
        setFetchedProducts((prevProducts) => [...prevProducts, ...products]);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMore = () => {
    // Increment the current page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-4/5 m-2">
        <h2>What's new?</h2>
        <GameList
          games={fetchedProducts.map((product) => ({
            title: product.name,
            thumbnail_url: product.thumbnail,
            description: product.description,
            slug: product.slug,
          }))}
        />
        <button onClick={loadMore}>Load More</button>
      </div>
      <div className="w-1/2 h-4/5 m-2">
        <h2>Top for this week</h2>
        <GameList
          games={fetchedProducts.map((product) => ({
            title: product.name,
            thumbnail_url: product.thumbnail,
            description: product.description,
            slug: product.slug,
          }))}
        />
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default MainScreen;

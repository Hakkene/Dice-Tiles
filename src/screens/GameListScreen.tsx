import GameList from "../components/ListComponents/GameList";

import { useEffect, useState } from "react";

const GameListScreen = () => {
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

    // Load data only when the component mounts or when currentPage changes
    fetchData();
  }, [currentPage]);

  const loadMore = () => {
    // Increment the current page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="m-4 p-4">
      <h2>Lista gier</h2>
      <GameList
        games={fetchedProducts.map((product) => ({
          title: product.name,
          thumbnail_url: product.thumbnail,
          description: product.description,
        }))}
      />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default GameListScreen;

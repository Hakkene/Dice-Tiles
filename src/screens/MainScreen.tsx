import GameList from "../components/ListComponents/GameList";

import { useEffect, useState } from "react";

const MainScreen = () => {
  const [fetchedProductsNew, setFetchedProductsNew] = useState<any[]>([]);
  const [fetchedProductsHot, setFetchedProductsHot] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await fetch(`http://152.67.138.40/api/products/?page=${currentPage}&sort_by=id_desc`);
        const data = await response.json();
        const products = data.results || [];
        setFetchedProductsNew((prevProducts) => [...prevProducts, ...products]);
        // setFetchedProductsNew(data);
        console.log("Dane z API:", data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };
  
    const fetchDataHot = async () => {
      try {
        const response = await fetch(`http://152.67.138.40/api/products/?page=${currentPage}&sort_by=upvotes`);
        const data = await response.json();
        const products = data.results || [];
        setFetchedProductsHot((prevProducts) => [...prevProducts, ...products]);
        // setFetchedProductsHot(data);
        console.log("Dane z API:", data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };
  
    fetchDataNew();
    fetchDataHot();
  }, [currentPage]);

  const loadMore = () => {
    // Increment the current page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-96 m-2">
        <h2>What's new?</h2>
        <GameList
          games={fetchedProductsNew.map((product) => ({
            title: product.name,
            thumbnail_url: product.thumbnail,
            description: product.description,
          }))}
        />
      </div>
      <div className="w-1/2 h-96 m-2">
        <h2>Top for this week</h2>
        <GameList
          games={fetchedProductsHot.map((product) => ({
            title: product.title,
            thumbnail_url: product.thumbnail,
            description: product.description,
          }))}
        />
        <button onClick={loadMore}>Load More</button>
      </div>
      
    </div>
  );
};

export default MainScreen;

import GameList from "../components/ListComponents/GameList";
import { useEffect, useState, useMemo, useCallback } from "react";

interface Product {
  name: string;
  thumbnail: string;
  description: string;
  slug: string;
}

const MainScreen = () => {
  const [fetchedProductsNew, setFetchedProductsNew] = useState<Product[]>([]);
  const [fetchedProductsHot, setFetchedProductsHot] = useState<Product[]>([]);
  const [currentPageNew, setCurrentPageNew] = useState<number>(1);
  const [currentPageHot, setCurrentPageHot] = useState<number>(1);

  const fetchData = useCallback(
    async (
      url: string,
      setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    ) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const products = (data.results || []) as Product[];
        setProducts((prevProducts) => [...prevProducts, ...products]);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    },
    []
  );

  useEffect(() => {
    fetchData(
      `http://152.67.138.40/api/products/?page=${currentPageNew}&page_size=5&sort_by=id_desc`,
      setFetchedProductsNew
    );
  }, [currentPageNew, fetchData]);

  useEffect(() => {
    fetchData(
      `http://152.67.138.40/api/products/?page=${currentPageHot}&page_size=5&sort_by=upvotes`,
      setFetchedProductsHot
    );
  }, [currentPageHot, fetchData]);

  const loadMoreNew = useCallback(() => {
    // Increment the current page
    setCurrentPageNew((prevPage) => prevPage + 1);
  }, []);

  const loadMoreHot = useCallback(() => {
    // Increment the current page
    setCurrentPageHot((prevPage) => prevPage + 1);
  }, []);

  const gamesNew = useMemo(
    () =>
      fetchedProductsNew.map((product) => ({
        title: product.name,
        thumbnail_url: product.thumbnail,
        description: product.description,
        slug: product.slug,
      })),
    [fetchedProductsNew]
  );

  const gamesHot = useMemo(
    () =>
      fetchedProductsHot.map((product) => ({
        title: product.name,
        thumbnail_url: product.thumbnail,
        description: product.description,
        slug: product.slug,
      })),
    [fetchedProductsHot]
  );

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-4/6 m-2">
        <h2 className="text-2xl font-bold">What's new?</h2>
        <GameList games={gamesNew} />
        <button
          className="bg-[#0a192f] text-gray-300 p-2 rounded-md"
          onClick={loadMoreNew}
        >
          Load More
        </button>
      </div>
      <div className="w-1/2 h-4/6 m-2">
        <h2 className="text-2xl font-bold">Top for this week</h2>
        <GameList games={gamesHot} />
        <button
          className="bg-[#0a192f] text-gray-300 p-2 rounded-md"
          onClick={loadMoreHot}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MainScreen;

import GameList from "../components/ListComponents/GameList";
import { useEffect, useState } from "react";

const UserListScreen = () => {
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
    <div className="m-4 p-4">
      <h2>twoaj lista</h2>
      <GameList
        games={fetchedProducts.map((product) => ({
          title: product.name,
          thumbnail_url: product.thumbnail_url,
          description: product.description,
        }))}
      />
    </div>
  );
};

export default UserListScreen;

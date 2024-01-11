import CommentSection from "../components/TitleComponents/CommentSection";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TitleScreen = () => {
  const { gameName } = useParams<{ gameName: string }>();

  const sampleComments = [
    {
      userIcon: "url-to-user-icon1.jpg",
      userName: "User1",
      commentText: "This is a great comment!",
      liked: true,
    },
    {
      userIcon: "url-to-user-icon1.jpg",
      userName: "User1",
      commentText: "This is !",
      liked: true,
    },
  ];

  const producer = "Producent";
  const rating = 98;

  const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products/");
        const data = await response.json();
        setFetchedProducts(data.results || []);
        console.log("Dane z API:", data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  const selectedProduct = fetchedProducts.find(
    (product) => product.name === gameName
  );

  if (!selectedProduct) {
    return <div>Loading...</div>; // You might want to handle the case where the product is not found
  }

  const handleRecommendationClick = (item: string) => {
    console.log(item);
  };

  const images = [
    selectedProduct.image1,
    selectedProduct.image2,
    selectedProduct.image3,
    selectedProduct.image4,
    selectedProduct.image5,
  ];

  return (
    <div className="w-3/5 mx-auto flex flex-col justify-center">
      <ImageGallery
        title={selectedProduct.name}
        image_url={selectedProduct.image1}
        description={selectedProduct.description}
        images={images}
        upvotes={selectedProduct.upvotes}
        downvotes={selectedProduct.downvotes}
        min_players={selectedProduct.min_players}
        max_players={selectedProduct.max_players}
      />
      <Description description={selectedProduct.description} />
      <Recomendations
        recommendations={images}
        onRecommendationClick={handleRecommendationClick}
      />
      <CommentSection comments={sampleComments} />
    </div>
  );
};

export default TitleScreen;

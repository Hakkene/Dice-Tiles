import CommentSection from "../components/TitleComponents/CommentSection";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";
import { useEffect, useState } from "react";

const TitleScreen = () => {
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

  const images = [
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
  ];

  const producer = "Producent";
  const rating = 98;

  const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/fetchedproducts/?name=Pandemic Legacy: Season 1"
        );
        const data = await response.json();
        setFetchedProducts(data);
        console.log("Dane z API:", data);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, []);

  const handleRecommendatiClick = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div className="w-3/5 mx-auto flex flex-col justify-center">
        <div>
          {fetchedProducts.map((product) => (
            <ImageGallery
              title={product.name}
              image_url={product.image_url}
              description={product.description}
              images={images}
              producer={producer}
              rating={rating}
            />
          ))}
        </div>
        <div>
          {fetchedProducts.map((product) => (
            <Description description={product.description} />
          ))}
        </div>
        <div>
          <Recomendations
            recommendations={images}
            onRecommendationClick={handleRecommendatiClick}
          />
        </div>
        <div>
          <CommentSection comments={sampleComments} />
        </div>
      </div>
    </>
  );
};

export default TitleScreen;

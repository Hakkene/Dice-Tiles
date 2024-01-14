import CommentSection from "../components/TitleComponents/CommentSection";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TitleScreen = () => {
  const { slug } = useParams<{ slug: string }>();

  const [product, setproduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `http://localhost:3001/api/products/${encodeURIComponent(slug)}/`
          );
          const data = await response.json();
          setproduct(data || null);
          console.log("Dane z API:", data);
        }
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>; // You might want to handle the case where the product is not found
  }

  const handleRecommendationClick = (item: string) => {
    console.log(item);
  };

  const images = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
  ];

  return (
    <div className="w-3/5 mx-auto flex flex-col justify-center">
      <ImageGallery
        title={product.name}
        image_url={product.image1}
        description={product.description}
        images={images}
        upvotes={product.upvotes}
        downvotes={product.downvotes}
        min_players={product.min_players}
        max_players={product.max_players}
      />
      <Description description={product.description} />
      <Recomendations
        recommendations={images}
        onRecommendationClick={handleRecommendationClick}
      />
    </div>
  );
};

export default TitleScreen;

import CommentSection from "../components/TitleComponents/CommentSection";
import AddComment from "../components/TitleComponents/AddComment";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";
import AddLikeDislike from "../components/TitleComponents/AddLikeDislike.tsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext.tsx";

const TitleScreen = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setproduct] = useState<any | null>(null);
  const { token } = useAuth();
  const [commentCount, setCommentCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `http://152.67.138.40/api/products/${encodeURIComponent(slug)}/`
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

  const handleCommentAdded = () => {
    // Aktualizuj lokalny stan związanym z liczbą komentarzy
    setCommentCount((prevCount) => prevCount + 1);
  };

  if (!product) {
    return <div>Loading...</div>;
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
      {token && <AddLikeDislike id={product.id} />}
      <Description description={product.description} />
      <Recomendations
        recommendations={images}
        onRecommendationClick={handleRecommendationClick}
      />
      {token && (
        <AddComment product={product.id} onCommentAdded={handleCommentAdded} />
      )}
      <CommentSection key={commentCount} product={product.id} />
    </div>
  );
};

export default TitleScreen;

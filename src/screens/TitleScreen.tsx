import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext.tsx";
import CommentSection from "../components/TitleComponents/CommentSection";
import AddComment from "../components/TitleComponents/AddComment";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";
import AddLikeDislike from "../components/TitleComponents/AddLikeDislike.tsx";

const TitleScreen = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const { token } = useAuth();
  const [commentCount, setCommentCount] = useState<number>(0);

  const fetchData = useCallback(async () => {
    try {
      if (slug) {
        const headers: Record<string, string> = token
          ? { Authorization: `Token ${token}` }
          : {};

        const response = await fetch(
          `http://152.67.138.40/api/products/${encodeURIComponent(slug)}/`,
          {
            headers,
          }
        );

        const data = await response.json();
        setProduct(data || null);
        console.log("Dane z API:", data);
      }
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
    }
  }, [slug, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleVoteSubmitted = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const handleCommentAdded = useCallback(() => {
    setCommentCount((prevCount) => prevCount + 1);
  }, []);

  const handleRecommendationClick = useCallback((item: string) => {
    console.log(item);
  }, []);

  const images = useMemo(
    () => [
      product?.image1,
      product?.image2,
      product?.image3,
      product?.image4,
      product?.image5,
    ],
    [product]
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-3/5 mx-auto flex flex-col justify-center">
      <ImageGallery
        title={product.name}
        image_url={product.image1}
        description={product.description}
        images={images}
        min_players={product.min_players}
        max_players={product.max_players}
      />
      {token && (
        <AddLikeDislike
          id={product.id}
          liked={product.user_vote}
          upvotes={product.upvotes}
          downvotes={product.downvotes}
          onVoteSubmitted={handleVoteSubmitted}
        />
      )}
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

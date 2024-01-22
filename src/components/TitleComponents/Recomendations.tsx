import { useMemo, useCallback } from "react";

interface Props {
  recommendations: string[];
  onRecommendationClick: (recommendation: string) => void;
}

const Recomendations = ({ recommendations, onRecommendationClick }: Props) => {
  // Memoizacja listy rekomendacji
  const memoizedRecommendations = useMemo(
    () => recommendations,
    [recommendations]
  );

  // Memoizacja funkcji obsługującej kliknięcia
  const handleClick = useCallback(
    (recommendation: string) => {
      onRecommendationClick(recommendation);
    },
    [onRecommendationClick]
  );

  return (
    <div className="flex justify-center flex-col h-52 mb-5">
      <h2 className="m-4 text-2xl font-bold">Recomendations</h2>
      <ul className="overflow-x-auto flex flex-row gap-1">
        {memoizedRecommendations.map((recommendation, index) => (
          <li
            key={index}
            onClick={() => handleClick(recommendation)}
            className="w-1/5 flex-none"
          >
            <img
              src={recommendation}
              alt="img"
              className="object-cover w-full h-full bg-slate-400"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recomendations;

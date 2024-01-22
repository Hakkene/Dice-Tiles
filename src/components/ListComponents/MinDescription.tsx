import { useMemo, memo } from "react";

interface Props {
  text: string;
  maxLength: number;
}

const MinDescription = ({ text, maxLength }: Props) => {
  const shortenedText = useMemo(() => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }, [text, maxLength]);

  return <p className="description-text">{shortenedText}</p>;
};

export default memo(MinDescription);

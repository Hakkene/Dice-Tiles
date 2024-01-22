import { useMemo } from "react";

interface Props {
  owner: string;
  body: string;
  created_on: Date;
}

const Comment = ({ owner, body, created_on }: Props) => {
  // Memoizacja przekształconej daty
  const parsedDate = useMemo(() => new Date(created_on), [created_on]);

  // Memoizacja funkcji formatującej datę
  const formattedDate = useMemo(() => {
    return `${parsedDate.getDate()} - ${
      parsedDate.getMonth() + 1
    } - ${parsedDate.getFullYear()}`;
  }, [parsedDate]);

  return (
    <div className="p-2 border border-gray-300 bg-gray-100 grid grid-cols-10 items-center gap-20 mb-4 rounded-md">
      <div className="col-span-10">
        <div className="underline font-semibold text-blue-600">{owner}</div>
        <div className=" text-blue-300">{formattedDate}</div>
        <p className="comment-text">{body}</p>
      </div>
    </div>
  );
};

export default Comment;

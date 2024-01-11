import { useEffect, useState } from "react";
import Comment from "./Comment";

interface CommentProps {
  id: string;
}

interface CommentData {
  id: number;
  title: string;
  body: string;
  created_on: Date;
  owner: string;
}

const CommentSection = ({ id }: CommentProps) => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/comment/${id}/`
        );
        const data = await response.json();
        setComments(data.results || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <div className="mb-4">
      <h2 className="m-4 text-2xl font-bold">Comments</h2>
      <ul className="comoverflow-y-auto gap-1">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment
              owner={comment.owner}
              body={comment.body}
              created_on={comment.created_on}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;

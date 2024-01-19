import React, { useState } from "react";
import { useAuth } from "../../AuthContext.tsx";
interface AddCommentProps {
  product: number;
  onCommentAdded: () => void;
}

const AddComment: React.FC<AddCommentProps> = ({ product, onCommentAdded }) => {
  const [body, setBody] = useState<string>("");
  const { token } = useAuth();

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch("http://152.67.138.40/api/comment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          product: product,
          body: body,
        }),
      });

      if (response.ok) {
        console.log("Comment added successfully");
        onCommentAdded();
      } else {
        const errorData = await response.json();
        console.error("Error adding comment:", errorData);
        // Handle comment addition failure
      }
    } catch (error) {
      console.error("Error during comment addition:", error);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Add a Comment</h2>
      <textarea
        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
        placeholder="Enter your comment..."
        value={body}
        onChange={handleBodyChange}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;

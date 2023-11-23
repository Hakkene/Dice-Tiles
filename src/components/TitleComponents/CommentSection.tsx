import Comment from "./Comment";

interface Props {
  comments: Array<{
    userIcon: string;
    userName: string;
    commentText: string;
    liked: boolean;
  }>;
}

const CommentSection = ({ comments }: Props) => {
  return (
    <div className="mb-4">
      <h2 className="m-4 text-2xl font-bold">Comments</h2>
      <ul className="comoverflow-y-auto gap-1">
        {comments.map((comment, index) => (
          <li>
            <Comment
              key={index}
              userIcon={comment.userIcon}
              userName={comment.userName}
              comment={comment.commentText}
              liked={comment.liked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;

interface Props {
  userIcon: string;
  userName: string;
  comment: string;
  liked: boolean;
}

const Comment = ({ userIcon, userName, comment, liked }: Props) => {
  return (
    <div className="grid grid-cols-10 items-center gap-20 mb-16">
      <div className="col-span-1 w-20 h-20">
        <img
          src={userIcon}
          alt="User Icon"
          className="object-cover w-full h-full rounded-full bg-slate-400"
        />
      </div>
      <div className="col-span-8">
        <div className="underline font-semibold text-blue-600">{userName}</div>
        <p className="comment-text">{comment}</p>
      </div>
      <div className="col-span-1">
        {liked ? (
          <span className="like-icon">👍</span>
        ) : (
          <span className="dislike-icon">👎</span>
        )}
      </div>
    </div>
  );
};

export default Comment;

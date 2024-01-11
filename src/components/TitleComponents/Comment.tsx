interface Props {
  owner: string;
  body: string;
  created_on: Date;
}

const Comment = ({ owner, body }: Props) => {
  return (
    <div className="grid grid-cols-10 items-center gap-20 mb-16">
      <div className="col-span-1 w-20 h-20">
        <img
          //src={}
          alt="User Icon"
          className="object-cover w-full h-full rounded-full bg-slate-400"
        />
      </div>
      <div className="col-span-8">
        <div className="underline font-semibold text-blue-600">{owner}</div>
        <p className="comment-text">{body}</p>
      </div>
    </div>
  );
};

export default Comment;

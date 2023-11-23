interface Props {
  text: string;
}

const Description = ({ text }: Props) => {
  return (
    <div className="mb-5">
      <h3 className="m-4 text-2xl font-bold">Description</h3>
      <p className="description-text">{text}</p>
    </div>
  );
};

export default Description;

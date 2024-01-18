import { useAuth } from "../../AuthContext";

interface Props {
  id: number;
}

const AddLikeDislike = ({ id }: Props) => {
  const { token } = useAuth();

  const handleAdd = async () => {
    try {
      const response = await fetch(`http://152.67.138.40/api/ownedproduct/`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: id,
        }),
      });

      if (response.ok) {
        console.log("Product added successfully");
      } else {
        const errorData = await response.json();
        console.error("Adding product failed:", errorData);
      }
    } catch (error) {
      console.error("Error during adding product:", error);
    }
  };

  const handleVote = async (vote: number) => {
    try {
      const response = await fetch(`http://152.67.138.40/api/vote/`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: id,
          value: vote,
        }),
      });

      if (response.ok) {
        console.log("Vote submitted successfully");
      } else {
        const errorData = await response.json();
        console.error("Voting failed:", errorData);
      }
    } catch (error) {
      console.error("Error during voting:", error);
    }
  };

  return (
    <div className="grid grid-cols-12 mb-10">
      <button
        className="col-span-4 bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={handleAdd}
      >
        Add to your collection
      </button>
      <p className="col-span-2" />
      <button
        className="col-span-2 bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={() => handleVote(1)}
      >
        Like
      </button>
      <p className="col-span-1" />
      <button
        className="col-span-2 bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={() => handleVote(0)}
      >
        Dislike
      </button>
    </div>
  );
};

export default AddLikeDislike;

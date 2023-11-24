import CommentSection from "../components/TitleComponents/CommentSection";
import Description from "../components/TitleComponents/Description";
import ImageGallery from "../components/TitleComponents/ImageGallery";
import Recomendations from "../components/TitleComponents/Recomendations";

function TitleScreen() {
  const sampleComments = [
    {
      userIcon: "url-to-user-icon1.jpg",
      userName: "User1",
      commentText: "This is a great comment!",
      liked: true,
    },
    {
      userIcon: "/assets/ionia.jpg",
      userName: "User1",
      commentText:
        "This is dddddddd ddddddd ddddddddddddddd dddddddddddddd dddddddasddf ffffffffdddddd dddddddddddd dddddddasddffffff fffddddddddddd dddddddddddddd asddffffffff fddddddddddddddddd ddddddddasddfffffffffdddddddddd  dddddd dddddddddasddfffffffffddddddd ddddddddddd ddddd ddasddf ffffffffddddd ddddd dddd ddddd ddddddasddffff fffffdddddddddd dddddddddddddddasd dffffff  fffdddddd  ddddddd ddddddddd ddasddffff fffffdddd dddddddd dddddddddd dddasddf ffffffffddddddddd ddddddddddddddd dasddfffffffffdddddddddddd ddddddddddddda ddfffffffffd dddddd dddasddffffffffff fffffa great comment!",
      liked: true,
    },
    {
      userIcon: "/assets/mr2_AI_red.png",
      userName: "User1",
      commentText:
        "This is dddddddd ddddddd ddddddddddddddd dddddddddddddd dddddddasddf ffffffffdddddd dddddddddddd dddddddasddffffff fffddddddddddd dddddddddddddd asddffffffff fddddddddddddddddd ddddddddasddfffffffffdddddddddd  dddddd dddddddddasddfffffffffddddddd ddddddddddd ddddd ddasddf ffffffffddddd ddddd dddd ddddd ddddddasddffff fffffdddddddddd dddddddddddddddasd dffffff  fffdddddd  ddddddd ddddddddd ddasddffff fffffdddd dddddddd dddddddddd dddasddf ffffffffddddddddd ddddddddddddddd dasddfffffffffdddddddddddd ddddddddddddda ddfffffffffd dddddd dddasddffffffffff fffffa great comment!",
      liked: true,
    },
    {
      userIcon: "/assets/mr2_AI_red.png",
      userName: "User1",
      commentText:
        "This is dddddddd ddddddd ddddddddddddddd dddddddddddddd dddddddasddf ffffffffdddddd dddddddddddd dddddddasddffffff fffddddddddddd dddddddddddddd asddffffffff fddddddddddddddddd ddddddddasddfffffffffdddddddddd  dddddd dddddddddasddfffffffffddddddd ddddddddddd ddddd ddasddf ffffffffddddd ddddd dddd ddddd ddddddasddffff fffffdddddddddd dddddddddddddddasd dffffff  fffdddddd  ddddddd ddddddddd ddasddffff fffffdddd dddddddd dddddddddd dddasddf ffffffffddddddddd ddddddddddddddd dasddfffffffffdddddddddddd ddddddddddddda ddfffffffffd dddddd dddasddffffffffff fffffa great comment!",
      liked: true,
    },
    {
      userIcon: "url-to-user-icon1.jpg",
      userName: "User1",
      commentText:
        "This is dddddddd ddddddd ddddddddddddddd dddddddddddddd dddddddasddf ffffffffdddddd dddddddddddd dddddddasddffffff fffddddddddddd dddddddddddddd asddffffffff fddddddddddddddddd ddddddddasddfffffffffdddddddddd  dddddd dddddddddasddfffffffffddddddd ddddddddddd ddddd ddasddf ffffffffddddd ddddd dddd ddddd ddddddasddffff fffffdddddddddd dddddddddddddddasd dffffff  fffdddddd  ddddddd ddddddddd ddasddffff fffffdddd dddddddd dddddddddd dddasddf ffffffffddddddddd ddddddddddddddd dasddfffffffffdddddddddddd ddddddddddddda ddfffffffffd dddddd dddasddffffffffff fffffa great comment!",
      liked: true,
    },

    {
      userIcon: "/assets/ionia.jpg",
      userName: "User1",
      commentText: "This is a great comment!",
      liked: true,
    },
    {
      userIcon: "/assets/ionia.jpg",
      userName: "User2",
      commentText: "I disagree with the previous comment.",
      liked: false,
    },
  ];

  const sampleDescryption =
    "opis gry afsdddadfa asdf as dfa asdf asdf asdfasd fggdghgs asfs dfdsafdas fdasf das faf das fas as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf as dfa asdf asdf";

  const images = [
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
    "/assets/ionia.jpg",
    "/assets/mr2_AI_purple.jpg",
    "/assets/mr2_AI_red.png",
  ];
  const producer = "PawilonGames";
  const rating = 98;
  const handleRecommendatiClick = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div className="w-3/5 mx-auto flex flex-col justify-center">
        <div>
          <ImageGallery
            title="Nazwa gry"
            images={images}
            producer={producer}
            rating={rating}
          />
        </div>
        <div>
          <Description text={sampleDescryption} />
        </div>
        <div>
          <Recomendations
            recommendations={images}
            onRecommendationClick={handleRecommendatiClick}
          />
        </div>
        <div>
          <CommentSection comments={sampleComments} />
        </div>
      </div>
    </>
  );
}

export default TitleScreen;

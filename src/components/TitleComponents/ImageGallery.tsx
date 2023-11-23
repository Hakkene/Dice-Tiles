import { useState } from "react";

interface Props {
  title: string;
  images: string[];
  producer: string;
  rating: number;
}

const ImageGallery = ({ title, images, producer, rating }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="grid grid-cols-5 mb-20">
      <div className="col-span-5">
        <h2 className="m-4 text-2xl font-bold">{title}</h2>
      </div>
      <div className="mb-4 col-span-3 h-96">
        <img
          src={selectedImage}
          alt="img"
          className="object-cover w-full h-full bg-slate-400"
        />
      </div>
      <div className="col-span-2 pl-4 h-96 overflow-hidden">
        <p>
          opis gry dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds fadsf a
          fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas fasd fasdf
          dsf as opis gry dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds
          fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas
          fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd asd as df asd f a
          dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf
          asdfas fas fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd asd as df
          asd f a dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa
          asf asdfas fas fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd asd as
          df asd f a dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf
          dsa asf asdfas fas fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd
          asd as df asd f a dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd
          fdasfasdfsf dsa asf asdfas fas fasd fasdf dsf asopis gry dfdsafdasasdf
          ads fasd asd as df asd f a dsfdsafds fadsf a fasdffa sdf asdfas fdas
          fasd fdasfasdfsf dsa asf asdfas fas fasd fasdf dsf asopis gry
          dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds fadsf a fasdffa sdf
          asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas fasd fasdf dsf asopis
          gry dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds fadsf a fasdffa
          sdf asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas fasd fasdf dsf
          asopis gry dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds fadsf a
          fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas fasd fasdf
          dsf asopis gry dfdsafdasasdf ads fasd asd as df asd f a dsfdsafds
          fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf asdfas fas
          fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd asd as df asd f a
          dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa asf
          asdfas fas fasd fasdf dsf asopis gry dfdsafdasasdf ads fasd asd as df
          asd f a dsfdsafds fadsf a fasdffa sdf asdfas fdas fasd fdasfasdfsf dsa
          asf asdfas fas fasd fasdf dsf as
        </p>
      </div>
      <ul className="col-span-3 overflow-x-auto flex flex-row gap-1 justify-">
        {images.map((image, index) => (
          <li
            key={index}
            onClick={() => handleImageClick(image)}
            className="w-1/5 flex-none"
          >
            <img
              src={image}
              alt="img"
              className="object-cover w-full h-full bg-slate-400"
            />
          </li>
        ))}
      </ul>
      <div className="col-span-2 pl-4 justify-center flex flex-col">
        <p>Producer: {producer}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ImageGallery;

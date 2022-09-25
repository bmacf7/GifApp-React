import { useState, useEffect } from "react";

import GifCard from "../components/GifCard.jsx";
import { getGifs } from "../helpers/getGifs.js";

function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;

import React, { useState, useEffect } from "react";

const ImageCarousel = ({ component }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % component.images.length);
    }, component.interval || 0);

    return () => clearInterval(interval);
  }, [component.images.length, component.interval]);

  return (
    <img
      src={component.images[currentIndex]}
      alt={`Carousel ${currentIndex + 1}`}
      style={{
        width: `${component.width}px`,
        height: `${component.height}px`,
        borderRadius: "4px",
        objectFit: "cover",
      }}
    />
  );
};

export default ImageCarousel;

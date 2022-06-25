import React, { useState } from "react";
import images from "./images";
import iconNext from "../../images/icon-next.svg";
import iconPrevious from "../../images/icon-previous.svg";

function ProductGalerie() {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMovet = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      showNextImg();
    }
    if (touchStart - touchEnd < -150) {
      showPreviousImg();
    }
  };

  const showNextImg = () => {
    if (currentIndex + 1 >= images.length) {
      setCurrentIndex(0);
      setActiveImage(images[0]);
    } else {
      setActiveImage(() => {
        const nextImg = images.filter((item, index) => {
          return index === currentIndex + 1;
        });
        return nextImg[0];
      });
      setCurrentIndex(currentIndex + 1);
    }
  };
  const showPreviousImg = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setActiveImage(images[images.length - 1]);
    } else {
      setActiveImage(() => {
        const previousImg = images.filter((item, index) => {
          return index === currentIndex - 1;
        });

        return previousImg[0];
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="product-galerie">
      <div className="main-img">
        <img
          className="img"
          src={activeImage.img}
          alt="product"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMovet}
          onTouchEnd={handleTouchEnd}
        />
        <img
          onClick={showNextImg}
          className="icon-next icon"
          src={iconNext}
          alt="icon"
        />
        <img
          onClick={showPreviousImg}
          className="icon-previous icon"
          src={iconPrevious}
          alt="icon"
        />
      </div>

      <div className="thumbnails-container">
        {images.map((item, index) => {
          return (
            <div
              className={
                currentIndex === index
                  ? "thumbnail activeThumbnail"
                  : "thumbnail"
              }
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setActiveImage(images[index]);
              }}
            >
              <img src={item.thumb} alt="product " />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGalerie;

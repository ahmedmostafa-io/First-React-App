import React, { useState, useEffect } from "react";
import Star from "./../Star";
import poert1 from "../../assets/Poert1.png";
import poert2 from "../../assets/Port2.png";
import poert3 from "../../assets/Port3.png";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setSelectedImage(null);
  }, [location.pathname]);

  const images = [poert1, poert2, poert3, poert1, poert2, poert3];

  return (
    <div className="bg-white lg:pt-16 lg:pb-5">
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-cyan-500/30 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[70%] max-h-[70%] shadow-2xl"
          />
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex-col space-y-1.5 pt-28 flex lg:pt-14 items-center justify-center">
          <h2 className="text-3xl text-second lg:text-[40px] pt-4 uppercase font-bold">
            portfolio component
          </h2>
          <Star className="relative *:text-second before:w-20 before:absolute before:-left-24 before:top-1/2 before:-translate-y-1/2 before:h-1 before:bg-second after:w-20 after:absolute after:-right-24 after:top-1/2 after:-translate-y-1/2 after:h-1 after:bg-second" />
        </div>

        <div className="lg:mx-14 mx-4 flex justify-center items-center pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-12 lg:grid-cols-3">
            {images.map((image, i) => (
              <ImageBox
                key={i}
                image={image}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageBox({ image, onClick }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative cursor-pointer rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <img src={image} alt="Portfolio" className="w-full rounded-2xl" />
      <PlusOverlay visible={isHover} />
    </div>
  );
}

function PlusOverlay({ visible }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-main flex justify-center items-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
    </div>
  );
}

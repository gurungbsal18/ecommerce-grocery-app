"use client";
import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

const HeroSlider = () => {
  const sliderImages = [
    {
      id: 1,
      title: "Best Quality",
      subtitle: "Original Product Guarantee",
      image: "image/honey.png",
      link: "#",
    },
    {
      id: 2,
      title: "Get Fresh Honey",
      subtitle: "Fresh Honey",
      image: "image/logo.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Secure Payment",
      image: "image/honey-product.webp",
      link: "#",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide !== sliderImages.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(sliderImages.length - 1);
    }
  };

  return (
    <>
      <div className="hero-slider">
        <div className="slides-container">
          {sliderImages.map((list, index) => (
            <div
              key={list.id}
              className={
                index === currentSlide
                  ? "slider-item active d-flex flex-column-reverse flex-md-row justify-content-between gap-5 gap-sm-2"
                  : "slider-item"
              }
            >
              <div className="slider-text">
                <div className="d-flex justify-content-start align-items-start flex-column">
                  <span className="text-muted">{list.subtitle}</span>
                  <h1 className="heading">{list.title}</h1>
                  <div className="d-flex gap-2 slider-button">
                    <span
                      role="button"
                      onClick={prevSlide}
                      className="hero-slider-icon"
                    >
                      <RiArrowDropLeftLine />
                    </span>
                    <span
                      role="button"
                      onClick={nextSlide}
                      className="hero-slider-icon"
                    >
                      <RiArrowDropRightLine />
                    </span>
                  </div>
                </div>
              </div>
              <img src={list.image} alt={list.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;

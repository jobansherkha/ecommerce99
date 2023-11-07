import React, { useState } from 'react';
import './Slider.css'
import { useSelector } from 'react-redux';
export const FeaturedSlider = (props) => {

    const { products } = useSelector((state) => state.product);
    const images= props.images.map(item => item.image);
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
     <div className="App">
      <div className="slider">
        <img src={images[currentIndex]} alt="Slider Image" />
      </div>
      <button className="slider-button" onClick={prevSlide}>Previous</button>
      <button className="slider-button" onClick={nextSlide}>Next</button>
    </div>
    </>
  )
}


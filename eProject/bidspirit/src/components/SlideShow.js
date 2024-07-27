import React, { useState } from 'react';
import '../css/SlideShow.css';

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0); 

  const slides = [
    { image: "/carousel1.webp", alt: "Nature", title: "CLASSIC WEEK", text: "Art from antiquiti to the 20th ", link: "#" },
    { image: "/carousel2.webp", alt: "Snow", title: "THE PERSONAL COLLECTION", text: "Winter wonderland", link: "#" },
    { image: "/carousel3.webp", alt: "Mountains", title: "21 CENTURY", text: "Majestic mountain view", link: "#" }
  ];

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  const jumpToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides ${index === slideIndex ? 'slide-in' : 'slide-out'}`}
        >
          <img src={slide.image} alt={slide.alt} style={{ width: "96%", height: "650px", objectFit: "cover" }} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <a href={slide.link}>LEARN MORE</a>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => jumpToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

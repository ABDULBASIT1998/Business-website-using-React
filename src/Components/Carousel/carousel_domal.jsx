import React, { useState, useEffect } from 'react';
import './carousel.css';
import img11 from '../../assets/openaluwin.jpg';
import img12 from '../../assets/mosqitonetwindow.jpg';
import img13 from '../../assets/slideopenwindow.jpg';
import img14 from '../../assets/woodtexture.jpg';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRunning, setTimeRunning] = useState(true);

  const carouselData = [
    {
      imgSrc: img11,
      author: "Introducing",
      topic: "Openable Windows",
      description: "Seamlessly blending modern aesthetics with functionality, these windows offer smooth operation for easy airflow and light control. Crafted from premium aluminium, they provide durability and excellent insulation. Elevate your space with this stylish and practical window solution, trending now.",
    },
    {
      imgSrc: img12,
      author: "Introducing",
      topic: "Foldable Mosquito Net",
      description: "The stylish and practical solution to keep bugs out. Crafted for seamless integration with windows and doors, it offers effortless operation and reliable protection. With its foldable design, it's easy to store when not in use. Enjoy fresh air and natural light without the hassle of traditional nets. Say goodbye to bugs, hello to convenience!",
    },
    {
      imgSrc: img13,
      author: "Introducing",
      topic: "Sliding Openable Door",
      description: "Elevate your space with our Sliding and Openable Windows and Doors. Crafted for seamless functionality and modern design, enjoy effortless transitions between indoor and outdoor living. Experience expansive views and adjustable airflow with our Sliding options, while our Openable fixtures offer easy natural light control. Redefine convenience and sophistication in your home or commercial space.",
    },
    {
      imgSrc: img14,
      author: "Introducing",
      topic: "Wooden Texture Coating",
      description: "Immerse your surfaces in the warmth of natural wood with our wooden texture powder coating. Our innovative technique adds depth and character to metal, aluminum, and other surfaces, replicating the organic feel of real wood grain. Enjoy the durability and versatility of powder coating while achieving the timeless look of wood. Elevate your projects with our wooden texture powder coating services from G. Nadaf Aluminium",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRunning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [timeRunning, carouselData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    setTimeRunning(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
    setTimeRunning(true);
  };

  return (
    <div className="carousel">
      <div className="list">
        {carouselData.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={item.imgSrc} alt="carousel-item" style={{ width: '100%', height: '100%' }} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>{'<'}</button>
          <button id="next" onClick={handleNext}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import './carousel.css';
import img21 from '../../assets/WPCdoor.jpg';
import img22 from '../../assets/upvc2door.jpg';
import img23 from '../../assets/Fiberdoor.jpg';
import img24 from '../../assets/cncdoor.jpg';


const CarouselDoor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRunning, setTimeRunning] = useState(true);

  const carouselData = [
    {
      imgSrc: img21,
      author: "Introducing",
      //title: "Openable Aluminium Windows",
      topic: "WPC Doors",
      description: "Upgrade your space with our premium WPC doors. Combining the elegance of wood with the durability of plastic, our doors offer style, strength, and sustainability. Ideal for residential and commercial settings, they require minimal maintenance and come in a variety of designs. Elevate your interior with WPC doors from G. Nadaf Aluminium.",
    },
    {
      imgSrc: img22,
      author: "Introducing",
      //title: "Foldable Mosquito Net",
      topic: "uPCV Doors",
      description: "Discover the superior quality and durability of our uPVC doors. Engineered to withstand the elements while maintaining their pristine appearance, our uPVC doors offer unmatched security, insulation, and low maintenance. Available in a range of styles and finishes, they are perfect for modern homes and businesses seeking long-lasting performance. Upgrade to uPVC doors from G. Nadaf Aluminium for lasting peace of mind.",
    },
    {
      imgSrc: img23,
      author: "Introducing",
      //title: "Sliding Openable Door",
      topic: "Fiber Doors",
      description: "Experience the innovation and reliability of our fibre doors. Crafted with advanced materials for exceptional strength and durability, our fibre doors offer a sleek and modern aesthetic while providing enhanced security and insulation. With minimal maintenance required, they are perfect for both residential and commercial applications. Elevate your space with fibre doors from G. Nadaf Aluminium."
        },
    {
        imgSrc: img24,
        author: "Introducing",
        //title: "Wood Figure Powder Coating",
        topic: "CNC and Routing Doors",
        description: "Explore the precision and customization of our CNC and routing doors. Utilizing cutting-edge technology, our doors are crafted with meticulous detail to bring your design vision to life. Whether you desire intricate patterns, unique shapes, or personalized finishes, our CNC and routing doors offer endless possibilities for residential and commercial projects. Transform your space with bespoke craftsmanship from G. Nadaf Aluminium.",
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

export default CarouselDoor;

import React from 'react';
import './product.css';
import Header from '../../Components/Headers/header';
import Footer from '../../Components/Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import win1 from "../../assets/window1.jpg";
import win2 from "../../assets/window2.jpg";
import win3 from "../../assets/window3.jpg";
import win4 from "../../assets/window4.jpg";
import part1 from "../../assets/part1.jpg";
import part2 from "../../assets/part2.jpg";
import part3 from "../../assets/part3.jpg";
import part4 from "../../assets/part4.jpg";
import part5 from "../../assets/part5.jpg";
import glaze1 from "../../assets/glaze1.jpg";
import glaze2 from "../../assets/glaze2.jpg";
import glaze3 from "../../assets/glaze3.jpg";
import glaze4 from "../../assets/glaze4.jpg";
import acp1 from "../../assets/acp1.jpg";
import acp2 from "../../assets/acp2.jpg";
import acp3 from "../../assets/acp3.jpg";
import acp4 from "../../assets/acp4.jpg";
import door1 from "../../assets/door1.jpg";
import door2 from "../../assets/door2.jpg";
import door3 from "../../assets/door3.jpg";
import door4 from "../../assets/door4.jpg";
import tg1 from "../../assets/tg1.jpg";
import tg2 from "../../assets/tg2.jpg";
import tg3 from "../../assets/tg3.png";
import tg4 from "../../assets/tg4.jpg";
import Carousel from '../../Components/Carousel/carousel_domal';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Aluminium Windows',
      description: 'Elevate your space with G. Nadaf Aluminium Windows. Our premium range combines durability, style, and energy efficiency. From sliding to awning windows, each product boasts superior craftsmanship and security features. Backed by the trusted G. Nadaf name, our windows promise elegance and performance. Upgrade your home or business with G. Nadaf Aluminium Windows today.',
      images: [win1, win2, win3, win4]
    },
    {
      id: 2,
      name: 'Aluminium Partition',
      description: 'Experience the perfect fusion of style and functionality with our aluminium partitions. Crafted for durability and versatility, our partitions redefine interior design. Choose G. Nadaf for sleek, modern solutions that transform any space effortlessly. With customizable options and expert installation, we ensure your vision becomes reality, creating environments that inspire.',
      images: [part1, part2, part3, part4, part5]
    },
    {
      id: 3,
      name: 'Structural Glazing',
      description: 'Elevate your building aesthetics with G. Nadaf Structural Glazing services. Our innovative solutions seamlessly integrate glass into architectural designs, offering both functionality and style. With a focus on precision engineering and superior materials, we ensure durability and performance. Trust G. Nadaf for expert installation and customizable options that enhance the visual appeal of any structure, setting new standards in architectural excellence.',
      images: [glaze1, glaze2, glaze3, glaze4]
    },
    {
      id: 4,
      name: 'Aluminium Composite Panel',
      description: 'Elevate your building exterior with G. Nadaf Aluminum Composite Panel services. Our expert craftsmanship and premium materials ensure striking facades that stand the test of time. From commercial complexes to residential projects, we offer customizable solutions tailored to your design needs. Trust G. Nadaf for impeccable installation and innovative designs that redefine modern architecture, making a lasting impression.',
      images: [acp1, acp2, acp3, acp4]
    },
    {
      id: 5,
      name: 'Lamination and Laminate Door',
      description: 'Experience excellence in finishing with G. Nadaf Lamination and Laminate Doors. Our expertise in lamination technology ensures flawless surfaces and durable protection for your furniture, flooring, or fixtures. Choose from a wide range of laminate options, from classic to contemporary designs, tailored to suit your aesthetic preferences. With G. Nadaf, you can expect meticulous attention to detail and high-quality results that enhance the beauty and longevity of your interior spaces. Trust us to elevate your surfaces with our unmatched craftsmanship and commitment to excellence.',
      images: [door1, door2, door3, door4]
    },

    {
      id: 6,
      name: 'Toughned Glass and DGU',
      description: 'Elevate your space with Toughened Glass and Double/Triple Glazing luxurious touch. Our toughened glass solutions ensure unparalleled safety and durability, providing peace of mind for your home or business. Additionally, our double and triple glazing options offer superior insulation, reducing energy costs and enhancing comfort. With G. Nadaf, you can expect expert installation and customizable designs tailored to your specific needs. Trust us to enhance your environment with cutting-edge technology and unmatched craftsmanship',
      images: [tg1, tg2, tg3, tg4]
    },

    // Add more products here...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null, // Hides the previous arrow
    nextArrow: null, // Hides the next arrow

  
  };

  return (
    <div className="product-page">
      <Header />
        <div className="content">
          <Carousel/>
          <div className="product-container">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className='card-slider'>
                  <Slider {...settings}>
                    {product.images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`imagebdjwdnkwd ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className='card-text'>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className='gallery'>
                    <a href="/gallery" className="gallery-link">
                      Gallery <span className="arrow">&#10140;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Product;

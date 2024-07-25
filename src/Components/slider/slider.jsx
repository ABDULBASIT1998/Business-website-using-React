import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './slider.css';

import { SliderProducts } from "../../data/products";

const Slider = () => {
    return (
        <div className='s-container'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20 // Adjust as per your design
                    },
                    667: {
                        slidesPerView: 2,
                        spaceBetween: 20 // Adjust as per your design
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10 // Adjust as per your design
                    },
                }}
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{slide.name}</span>
                                </div>
                                <span>{slide.detail}</span>
                                <div>Check more</div>
                            </div>
                            <img src={slide.img} alt='product' className='img-p' />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;

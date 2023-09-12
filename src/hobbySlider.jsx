import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hiking from './assets/hiking.jpg'
import salsa from './assets/salsa.png'
import fire from './assets/hosePour.jpg'

const HobbySlider = () => {
    const slides = [
        {
            id: 1,
            image: hiking,
            text: 'Hiking'
        },

        {
            id: 2,
            image: salsa,
            text: 'Salsa-ing'
        },

        {
            id: 3,
            image: fire,
            text: 'Firefighting'
        }
    ]

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className='carousel-container'>
      {slides.map((slide) => (
            <div
            key={slide.id}
                >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="rounded-lg overflow-hidden shadow-lg border">
                        <div style={{ padding: '20px' }}>
                            <img
                            src={slide.image}
                            alt={slide.text}
                            style={{
                                height: '30vh',
                                width: 'auto',
                                margin: '0 auto',
                            }}
                            className='p-4'
                            />
                            <p
                            className="text-gray-700 text-base 2xl:text-2xl 4xl:text-4xl 5xl:text-5xl"
                            style={{ textAlign: 'center' }}
                            >
                            {slide.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
  );
};

export default HobbySlider;



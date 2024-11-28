import React from 'react';
import Slider from 'react-slick';
import '../../Style/Slider/Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMemo } from 'react';

const SliderComponent = () => {
  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }), []);

  return (
    <div className='slider-container-box'>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              className="img__slider"
              src="/ImgSlider/Sale1.png"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              className="img__slider"
              src="/ImgSlider/Sale2.png"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="img__slider"
              src="/ImgSlider/Sale3.png"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              className="img__slider"
              src="/ImgSlider/Sale4.png"
              alt="Slide 4"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;

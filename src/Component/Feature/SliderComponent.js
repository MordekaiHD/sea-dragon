import React from 'react';
import Slider from 'react-slick';
import '../../Style/Slider/Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true, // Показывать навигационные точки
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации (в мс)
    slidesToShow: 1, // Сколько слайдов показывать
    slidesToScroll: 1, // Сколько слайдов прокручивать
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 3000, // Скорость автопрокрутки (в мс)
    arrows: true, // Кнопки "вперед/назад"
  };

  return (
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
  );
};

export default SliderComponent;

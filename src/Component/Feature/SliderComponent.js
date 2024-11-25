import React from 'react';
import Slider from 'react-slick'; // Импорт библиотеки для слайдера
import '../../Style/Slider/Slider.css'; // Подключение стилей для слайдера
import 'slick-carousel/slick/slick.css'; // Стандартные стили Slick для слайдера
import 'slick-carousel/slick/slick-theme.css'; // Тема Slick для слайдера
import { useMemo } from 'react';

const SliderComponent = () => {
  // Настройки для слайдера
  const settings = useMemo(() => ({
    dots: false, // Отключаем отображение навигационных точек
    infinite: true, // Включаем бесконечную прокрутку
    speed: 500, // Устанавливаем скорость анимации (500 мс)
    slidesToShow: 1, // Показываем один слайд за раз
    slidesToScroll: 1, // Прокручиваем один слайд за раз
    autoplay: true, // Включаем автопрокрутку
    autoplaySpeed: 3000, // Устанавливаем скорость автопрокрутки (3000 мс)
    arrows: true, // Включаем стрелки для навигации
  }), []);

  return (
    <div className='slider-container-box'>
      <div className="slider-container">
        {/* Используем компонент Slider с заданными настройками */}
        <Slider {...settings}>
          {/* Каждый слайд с изображением */}
          <div>
            <img
              className="img__slider"
              src="/ImgSlider/Sale1.png"
              alt="Slide 1" // Добавление alt текста для доступности
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

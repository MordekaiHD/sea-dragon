import React, { useEffect } from 'react';
import '../../Style/SushiBarLocation/style.css';

const SushiBarLocation = () => {
  useEffect(() => {
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = () => window.ymaps.ready(init);
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(init);
    }

    function init() {
      const mapElement = document.getElementById('map');

      if (!mapElement.dataset.mapInitialized) {
        const map = new window.ymaps.Map(mapElement, {
          center: [52.138444, 29.318262],
          zoom: 16,
          controls: ['zoomControl'],
        });

        map.behaviors.disable(['scrollZoom']);

        // Добавляем маркер
        const marker = new window.ymaps.Placemark([52.138444, 29.318262], {
          balloonContent: 'Суши-бар',
        }, {
          preset: 'islands#icon',
          iconColor: '#0095b6',
        });

        map.geoObjects.add(marker);

        mapElement.dataset.mapInitialized = true;
      }
    }

    return () => {
      const script = document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return <div className="map" id="map" style={{height: '400px' }} />;
};

export default SushiBarLocation;


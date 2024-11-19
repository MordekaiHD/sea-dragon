import React, { useEffect } from 'react';

const SushiBarLocation = () => {
  useEffect(() => {
    // Проверяем, инициализирован ли ymaps
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = () => window.ymaps.ready(init); // Ждем готовности ymaps
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(init); // Если скрипт уже загружен, сразу инициализируем
    }

    function init() {
      // Получаем элемент карты
      const mapElement = document.getElementById('map');

      // Проверяем, была ли уже инициализирована карта, чтобы избежать дублирования
      if (!mapElement.dataset.mapInitialized) {
        const map = new window.ymaps.Map(mapElement, {
          center: [52.138444, 29.318262],
          zoom: 17,
          controls: ['zoomControl'], // Добавляем только кнопки зума
        });

        map.behaviors.disable(['scrollZoom']); // Отключаем масштабирование и перемещение карты

        // Добавляем маркер на карту
        const marker = new window.ymaps.Placemark([52.138444, 29.318262], {
          balloonContent: 'Суши-бар'
        }, {
          preset: 'islands#icon',
          iconColor: '#0095b6'
        });

        map.geoObjects.add(marker); // Добавляем маркер на карту

        // Устанавливаем флаг, что карта инициализирована
        mapElement.dataset.mapInitialized = true;
      }
    }

    // Очистка ресурса, если необходимо
    return () => {
      const script = document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]');
      if (script) {
        // Удаляем скрипт, если он был загружен (это удаление нужно для случая, когда компонент размонтируется)
        document.head.removeChild(script);
      }
    };
  }, []); // Запускается только один раз при монтировании компонента

  return <div id="map" style={{ width: '100vw', height: '400px' }} />;
};

export default SushiBarLocation;

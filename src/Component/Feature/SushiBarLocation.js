import React, { useEffect } from 'react'; // Импорт React и хука useEffect
import '../../Style/SushiBarLocation/style.css'; // Подключение стилей

const SushiBarLocation = () => {
  useEffect(() => {
    // Проверяем, загружен ли уже API Яндекс.Карт
    if (!window.ymaps) {
      const script = document.createElement('script'); // Создаём новый тег <script>
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'; // URL API Яндекс.Карт
      script.async = true; // Асинхронная загрузка
      script.onload = () => window.ymaps.ready(init); // Инициализация карты после загрузки
      document.head.appendChild(script); // Добавляем тег <script> в <head>
    } else {
      // Если API уже загружен, просто инициализируем карту
      window.ymaps.ready(init);
    }

    function init() {
      const mapElement = document.getElementById('map');

      // Проверяем, была ли карта уже инициализирована
      if (!mapElement.dataset.mapInitialized) {
        const map = new window.ymaps.Map(mapElement, {
          center: [52.138444, 29.318262], // Координаты центра карты
          zoom: 16, // Масштаб
          controls: ['zoomControl'], // Контролы карты
        });

        // Отключаем скролл для увеличения/уменьшения карты
        map.behaviors.disable(['scrollZoom']);

        // Добавляем маркер на карту
        const marker = new window.ymaps.Placemark(
          [52.138444, 29.318262], // Координаты маркера
          {
            balloonContent: 'Суши-бар', // Содержимое всплывающего окна
          },
          {
            preset: 'islands#icon', // Тип маркера
            iconColor: '#0095b6', // Цвет маркера
          }
        );

        map.geoObjects.add(marker); // Добавляем маркер на карту

        mapElement.dataset.mapInitialized = true; // Помечаем, что карта инициализирована
      }
    }

    // Очистка: удаляем добавленный скрипт
    return () => {
      const script = document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Контейнер для карты
  return <div className="map" id="map" style={{ height: '400px' }} />;
};

export default SushiBarLocation;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice'; // Импортируем действие для добавления товара

function ProductLayout({
  id,
  img = '/placeholder-image.jpg', // Заглушка для изображения
  title,
  weight,
  text,
  price,
  quantity = 1, // Значение по умолчанию
  className = '' // Пустой класс по умолчанию
}) {
  const dispatch = useDispatch();

  // Обработчик добавления товара в корзину
  const handleAddToCart = () => {
    dispatch(addItem({ id, img, title, weight, text, price, quantity }));
  };

  return (
    <div className={`product__sushi ${className}`}>
      <img src={img} alt={title || 'Изображение продукта'} className="product__sushi__img" />
      <h1 className="product__sushi__title">{title}</h1>
      <p className="product__sushi__weight">{weight} гр.</p>
      <p className="product__sushi__text">{text}</p>
      <p className="product__sushi__price">{price} руб.</p>
      <button
        className="product__sushi__button"
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

// Проверка типов пропсов
ProductLayout.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID может быть строкой или числом
  img: PropTypes.string, // URL изображения
  title: PropTypes.string.isRequired, // Название продукта
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Вес продукта
  text: PropTypes.string.isRequired, // Описание продукта
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Цена продукта
  quantity: PropTypes.number, // Количество
  className: PropTypes.string, // Дополнительный CSS-класс
};

export default ProductLayout;

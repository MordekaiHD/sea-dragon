import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice'; // Импортируем действие для добавления товара

function ProductLayout({ id, img, title, weight, text, price, quantity, className }) {
  const dispatch = useDispatch(); // Инициализируем dispatch для отправки действий

  // Функция обработки добавления товара в корзину
  const handleAddToCart = () => {
    dispatch(addItem({ id, img, title, weight, text, price, quantity })); // Отправляем действие в Redux
  };

  return (
    <div className={`product__sushi ${className}`} key={id}>
      <img src={img} alt={title} className="product__sushi__img" />
      <h1 className="product__sushi__title">{title}</h1>
      <p className="product__sushi__weight">{weight} гр.</p>
      <p className="product__sushi__text">{text}</p>
      <p className="product__sushi__price">{price} руб.</p>
      <button
        className="product__sushi__button"
        onClick={handleAddToCart} // Вызов dispatch для добавления товара в корзину
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductLayout;

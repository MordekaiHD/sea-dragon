import React from 'react';

function ProductLayout({ id, img, title, weight, text, price, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ id, img, title, weight, text, price });
  };

  return (
    <div className="product__sushi" key={id}>
      <img src={img} alt={title} className="product__sushi__img" />
      <h1 className="product__sushi__title">{title}</h1>
      <p className="product__sushi__weight">{weight}</p>
      <p className="product__sushi__text">{text}</p>
      <button
        className="product__button__sushi product__button"
        onClick={handleAddToCart}
      >
        Добавить за {price} ₽
      </button>
    </div>
  );
}

export default ProductLayout;

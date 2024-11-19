import React from 'react';

function ProductLayout({ id, img, title, weight, text, price, quantity, className, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ id, img, title, weight, text, price, quantity });
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
        onClick={handleAddToCart}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductLayout;

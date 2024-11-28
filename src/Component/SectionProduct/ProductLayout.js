import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice'; 

function ProductLayout({
  id,
  img = '/placeholder-image.jpg',
  title,
  weight,
  text,
  price,
  quantity = 1, 
  className = '',
}) {
  const dispatch = useDispatch();

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
      <div className='product__sushi-box'>
        <button
          className="product__sushi__button"
          onClick={handleAddToCart}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

ProductLayout.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  quantity: PropTypes.number,
  className: PropTypes.string,
};

export default ProductLayout;

import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function IconsCart({ onButtonClick }) {
  const cartItems = useSelector((state) => state.cart.items);

  // Суммируем количество товаров в корзине
  const totalQuantity = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className={`cart__icon ${totalQuantity > 0 ? 'show' : ''}`}>
      <button
        className="cart__icon__button"
        onClick={onButtonClick}
        aria-label="Открыть корзину"
      >
        <img
          className="cart__icon__button__img"
          src="/ImgSectionMenu/icon/cart.svg"
          alt={totalQuantity > 0 ? `Корзина с ${totalQuantity} товаром` : 'Корзина'}
        />
        {totalQuantity > 0 && (
          <span className="cart__icon__button__badge">{totalQuantity}</span>
        )}
      </button>
    </div>
  );
}

export default IconsCart;
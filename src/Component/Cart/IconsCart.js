import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../../store/cartSlice';

function IconsCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const cartIconClass = totalQuantity > 0 ? 'cart__icon show' : 'cart__icon';

  return (
    <div className={cartIconClass}>
      <button
        className="cart__icon__button"
        onClick={() => dispatch(toggleCartVisibility())}
        aria-label="Открыть корзину"
      >
        <img
          className="cart__icon__button__img"
          src="/ImgSectionMenu/icon/cart.svg"
          alt={totalQuantity > 0 ? `Корзина с ${totalQuantity} товаром` : 'Корзина пуста'}
        />
        {totalQuantity > 0 && (
          <span className="cart__icon__button__badge">{totalQuantity}</span>
        )}
      </button>
    </div>
  );
}

export default IconsCart;

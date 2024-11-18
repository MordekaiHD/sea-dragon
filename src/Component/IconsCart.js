import React from "react";

function IconsCart({ onButtonClick, isCartVisible }) {
  return (
    <div className={`cart__icon ${isCartVisible ? 'show' : ''}`}>
      <button className="cart__icon__button" onClick={onButtonClick}>
        Корзина
      </button>
    </div>
  );
}

export default IconsCart;

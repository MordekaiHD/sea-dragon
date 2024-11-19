import React from "react";

function IconsCart({ onButtonClick, isCartVisible, items }) {
  // Подсчитываем общее количество товаров
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`cart__icon ${isCartVisible ? "show" : ""}`}>
      <button className="cart__icon__button" onClick={onButtonClick}>
        <img className="cart__icon__button__img" src="/ImgSectionMenu/cart.svg" alt="Cart Icon" />
        {totalQuantity > 0 && (
          <span className="cart__icon__button__badge">{totalQuantity}</span>
        )}
      </button>
    </div>
  );
}

export default IconsCart;

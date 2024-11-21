import React from "react";
import MenuNav from "./MenuNav/MenuNav.js";
import IconsCart from "./Cart/IconsCart.js";
import Cart from "./Cart/Cart.js";

import { useDispatch, useSelector } from 'react-redux';
import { toggleCartVisibility } from "../store/cartSlice.js";
import SliderComponent from "../Component/Feature/SliderComponent.js";
import SectionProduct from "./SectionProduct/SectionProduct.js";

function Main() {
  const dispatch = useDispatch();

  // Деструктурируем данные из состояния для удобства
  const { items: cartItems, isVisible: isCartVisible } = useSelector((state) => state.cart);

  const handleButtonClick = () => {
    // Переключение видимости корзины
    dispatch(toggleCartVisibility());
  };

  return (
    <main className="main">
      <SliderComponent />
      <MenuNav />
      <SectionProduct />

      {/* Отображаем иконку корзины только если есть товары */}
      {cartItems.length > 0 && <IconsCart onButtonClick={handleButtonClick} items={cartItems} />}

      {/* Отображаем корзину, если она видима */}
      {isCartVisible && <Cart />}
    </main>
  );
}

export default Main;

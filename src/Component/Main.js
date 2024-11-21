import React from "react";
import MenuNav from "./MenuNav/MenuNav.js";
import IconsCart from "./Cart/IconsCart.js";
import Cart from "./Cart/Cart.js";


import { useDispatch, useSelector } from 'react-redux';
import { toggleCartVisibility } from "../store/cartSlice.js";
import SliderComponent from "./SliderComponent.js";
import SectionProduct from "./SectionProduct/SectionProduct.js";


function Main() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartVisible = useSelector((state) => state.cart.isVisible);

  const handleButtonClick = () => {
    dispatch(toggleCartVisibility()); // Переключение видимости корзины
  };

  return (
    <main className="main">
      <SliderComponent />
      <MenuNav />
      <SectionProduct />
      <IconsCart onButtonClick={handleButtonClick} items={cartItems} />
      {isCartVisible && <Cart />}
    </main>
  );
}

export default Main;

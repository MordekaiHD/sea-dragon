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

  const { items: cartItems, isVisible: isCartVisible } = useSelector((state) => state.cart);

  const handleButtonClick = () => {
    dispatch(toggleCartVisibility());
  };

  return (
    <main className="main">
      <SliderComponent />
      <MenuNav />
      {cartItems.length > 0 && <IconsCart onButtonClick={handleButtonClick} items={cartItems} />}
      <SectionProduct />
      {isCartVisible && <Cart />}
    </main>
  );
}

export default Main;

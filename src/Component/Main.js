import React from "react";
import MenuNav from "./MenuNav/MenuNav.js";
import IconsCart from "./Cart/IconsCart.js";
import Cart from "./Cart/Cart.js";


import { useDispatch, useSelector } from 'react-redux';
import { addItem, toggleCartVisibility } from "../store/cartSlice.js";
import SectionProductSushi from "./SectionProduct/SectionProductSushi.js";
import SectionProductSpicySushi from "./SectionProduct/SectionProductSpicySushi.js";
import SectionProductBakedSushi from "./SectionProduct/SectionProductBakedSushi.js";
import SliderComponent from "./SliderComponent.js";



function Main() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartVisible = useSelector((state) => state.cart.isVisible);

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Добавление товара в корзину
  };

  const handleButtonClick = () => {
    dispatch(toggleCartVisibility()); // Переключение видимости корзины
  };

  return (
    <main className="main">

      <SliderComponent/>

      <MenuNav />

      <SectionProductSushi handleAddToCart={handleAddToCart} />

      <SectionProductSpicySushi handleAddToCart={handleAddToCart} />

      <SectionProductBakedSushi handleAddToCart={handleAddToCart} />

      <IconsCart onButtonClick={handleButtonClick} items={cartItems} />
      {isCartVisible && <Cart />}



    </main>
  );
}

export default Main;

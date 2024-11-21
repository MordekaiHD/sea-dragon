import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";

// Динамическая загрузка секций
import SectionProductSushi from "../SectionProduct/SectionProductSushi.js";
import SectionProductSpicySushi from "../SectionProduct/SectionProductSpicySushi.js";
import SectionProductBakedSushi from "../SectionProduct/SectionProductBakedSushi.js";

function SectionProduct() {
  const dispatch = useDispatch();

  // Обработчик добавления в корзину
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Конфигурация секций
  const sections = [
    { id: "sushi", Component: SectionProductSushi },
    { id: "spicySushi", Component: SectionProductSpicySushi },
    { id: "bakedSushi", Component: SectionProductBakedSushi },
  ];

  return (
    <>
      {sections.map(({ id, Component }) => (
        <Component key={id} handleAddToCart={handleAddToCart} />
      ))}
    </>
  );
}

export default SectionProduct;

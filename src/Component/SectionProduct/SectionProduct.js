import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";

// Динамическая загрузка секций
import SectionProductSushi from "../SectionProduct/SectionProductSushi.js";
import SectionProductSpicySushi from "../SectionProduct/SectionProductSpicySushi.js";
import SectionProductBakedSushi from "../SectionProduct/SectionProductBakedSushi.js";
import SectionProductColdRolls from "../SectionProduct/SectionProductColdRolls.js";
import SectionProductBakedRolls from "../SectionProduct/SectionProductBakedRolls.js";
import SectionProductTempuraSushi from "../SectionProduct/SectionProductTempuraSushi.js";
import SectionProductSetsSushi from "../SectionProduct/SectionProductSetsSushi.js";

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
    { id: "coldRolls", Component: SectionProductColdRolls },
    { id: "bakedRolls", Component: SectionProductBakedRolls },
    { id: "tempura", Component: SectionProductTempuraSushi },
    { id: "sets", Component: SectionProductSetsSushi },
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

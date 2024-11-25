import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";

// Динамическая загрузка секций меню (разделы продуктов)
import SectionProductSushi from "../SectionProduct/SectionProductSushi.js";
import SectionProductSpicySushi from "../SectionProduct/SectionProductSpicySushi.js";
import SectionProductBakedSushi from "../SectionProduct/SectionProductBakedSushi.js";
import SectionProductColdRolls from "../SectionProduct/SectionProductColdRolls.js";
import SectionProductBakedRolls from "../SectionProduct/SectionProductBakedRolls.js";
import SectionProductTempuraSushi from "../SectionProduct/SectionProductTempuraSushi.js";
import SectionProductSetsSushi from "../SectionProduct/SectionProductSetsSushi.js";

function SectionProduct() {
  const dispatch = useDispatch(); // Хук для использования функции dispatch из Redux

  // Обработчик добавления товара в корзину
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Вызываем action для добавления товара в Redux
  };

  // Конфигурация секций: массив с идентификаторами и связанными компонентами
  const sections = [
    { id: "sushi", Component: SectionProductSushi }, // Секция "Суши"
    { id: "spicySushi", Component: SectionProductSpicySushi }, // Секция "Острые суши"
    { id: "bakedSushi", Component: SectionProductBakedSushi }, // Секция "Запеченные суши"
    { id: "coldRolls", Component: SectionProductColdRolls }, // Секция "Холодные роллы"
    { id: "bakedRolls", Component: SectionProductBakedRolls }, // Секция "Запеченные роллы"
    { id: "tempura", Component: SectionProductTempuraSushi }, // Секция "Темпура"
    { id: "sets", Component: SectionProductSetsSushi }, // Секция "Сеты"
  ];

  return (
    <>
      {/* Проходим по всем секциям и рендерим их компоненты */}
      {sections.map(({ id, Component }) => (
        <Component key={id} handleAddToCart={handleAddToCart} /> // Передаем обработчик добавления в корзину
      ))}
    </>
  );
}

export default SectionProduct;

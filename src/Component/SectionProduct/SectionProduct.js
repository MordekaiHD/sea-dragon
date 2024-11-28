import React, { Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice.js";

const SectionProductSushi = lazy(() => import("../SectionProduct/SectionProductSushi"));
const SectionProductSpicySushi = lazy(() => import("../SectionProduct/SectionProductSpicySushi.js"));
const SectionProductBakedSushi = lazy(() => import("../SectionProduct/SectionProductBakedSushi.js"));
const SectionProductColdRolls = lazy(() => import("../SectionProduct/SectionProductColdRolls.js"));
const SectionProductBakedRolls = lazy(() => import("../SectionProduct/SectionProductBakedRolls.js"));
const SectionProductTempuraSushi = lazy(() => import("../SectionProduct/SectionProductTempuraSushi.js"));
const SectionProductSetsSushi = lazy(() => import("../SectionProduct/SectionProductSetsSushi.js"));

function SectionProduct() {
  const dispatch = useDispatch(); 

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

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
        <Suspense key={id} fallback={<div>Загрузка...</div>}>
          <Component handleAddToCart={handleAddToCart} />
        </Suspense>
      ))}
    </>
  );
}

export default SectionProduct;

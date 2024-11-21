import React from "react";
import ProductLayout from "../SectionProduct/ProductLayout"; // Добавили импорт
import products from "../ProductJSON/ProductSushi.js";


function SectionProductSpicySushi({ handleAddToCart }) {

  const spicySushi = products.spicy__sushi;

  return (
    <section className="section__product__spicy__sushi">
      <h1 className="product__title" id="sharp__sushi">
        Острые суши
        <img
          src="/ImgSectionMenu/sharp__sushi/chilli-pepper.png"
          alt="chilli-pepper"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__sushi__spicy">
        {spicySushi.map((product) => (
          <ProductLayout
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart} // Передаем функцию
          />
        ))}
      </article>
    </section>
  );
}

export default SectionProductSpicySushi;
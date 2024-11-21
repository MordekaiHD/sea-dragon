import React from "react";
import ProductLayout from "../SectionProduct/ProductLayout"; // Добавили импорт
import products from "../ProductJSON/ProductSushi.js";


function SectionProductBakedSushi({ handleAddToCart }) {

  const suchiBaked = products.baked__sushi;

  return (
    <section className="section__product__baked__sushi">
      <h1 className="product__title" id="baked__sushi">
        Запечённые суши
        <img
          src="/ImgSectionMenu/baked__sushi/fire.png"
          alt="fire"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__sushi__baked">
        {suchiBaked.map((product) => (
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

export default SectionProductBakedSushi;
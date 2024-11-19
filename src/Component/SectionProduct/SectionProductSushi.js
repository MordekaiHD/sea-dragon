import React from "react";
import ProductLayout from "../ProductLayout"; // Добавили импорт
import products from "../ProductJSON/ProductSushi.js";

function SectionProductSushi({ handleAddToCart }) {  // Пропс handleAddToCart приходит сюда

  const suchi = products.suchi;

  return (
    <section className="section__product__sushi">
      <h1 className="product__title" id="sushi">Суши</h1>
      <article className="product__article__sushi">
        {suchi.map((product) => (
          <ProductLayout
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart} // Передаем функцию handleAddToCart
          />
        ))}
      </article>
    </section>
  );
}

export default SectionProductSushi;

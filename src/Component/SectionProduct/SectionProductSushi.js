import React from "react";
import PropTypes from "prop-types";
import ProductLayout from "../SectionProduct/ProductLayout"; // Компонент для отображения продукта
import products from "../ProductJSON/ProductSushi.js"; // Импорт JSON с данными

function SectionProductSushi({ handleAddToCart }) {
  const suchi = products.suchi || []; // Защита от отсутствия данных

  return (
    <section className="section__product__sushi">
      <h1 className="product__title" id="sushi">
        Суши<img
          src="/ImgSectionMenu/sushi/sushi.png"
          alt="sushi"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__sushi">
        {suchi.length > 0 ? (
          suchi.map((product) => (
            <ProductLayout
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart} // Передаем обработчик добавления в корзину
            />
          ))
        ) : (
          <p className="empty-message">Нет доступных продуктов.</p>
        )}
      </article>
    </section>
  );
}

// Валидация пропсов
SectionProductSushi.propTypes = {
  handleAddToCart: PropTypes.func.isRequired, // Убедимся, что handleAddToCart — это функция
};

export default SectionProductSushi;

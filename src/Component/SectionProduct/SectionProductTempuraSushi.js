import PropTypes from "prop-types";
import ProductLayout from "./ProductLayout.js";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductTempuraSushi({ handleAddToCart }) {

  return (
    <section className="section__product__tempura">
      <h1 className="product__title" id="tempura">
        Темпура
        <img
          src="/ImgSectionMenu/icon/sushi__tempura.svg"
          alt="tempura"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__tempura">
        {products.tempura && products.tempura.length > 0 ? (
          products.tempura.map((product) => (
            <ProductLayout
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className="empty-message">Нет доступных продуктов.</p>
        )}
      </article>
    </section>
  );
}

SectionProductTempuraSushi.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SectionProductTempuraSushi;

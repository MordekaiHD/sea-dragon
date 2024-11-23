import PropTypes from "prop-types";
import ProductLayout from "./ProductLayout.js";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductColdRolls({ handleAddToCart }) {

  return (
    <section className="section__product__cold__rolls">
      <h1 className="product__title" id="cold__rolls">
        Холодные роллы
        <img
          src="/ImgSectionMenu/icon/sushi__cold.svg"
          alt="cold__rolls"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__cold__rolls">
        {products.cold__rolls && products.cold__rolls.length > 0 ? (
          products.cold__rolls.map((product) => (
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

SectionProductColdRolls.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SectionProductColdRolls;

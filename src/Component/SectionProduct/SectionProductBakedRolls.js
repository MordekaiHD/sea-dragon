import PropTypes from "prop-types";
import ProductLayout from "./ProductLayout.js";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductBakedRolls({ handleAddToCart }) {

  return (
    <section className="section__product__baked__rolls">
      <h1 className="product__title" id="baked__rolls">
        Запеченые роллы

        <img
          src="/ImgSectionMenu/icon/sushi__baked__rolls.svg"
          alt="baked__rolls"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__baked__rolls">
        {products.baked__rolls && products.baked__rolls.length > 0 ? (
          products.baked__rolls.map((product) => (
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

SectionProductBakedRolls.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SectionProductBakedRolls;

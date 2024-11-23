import PropTypes from "prop-types";
import ProductLayout from "./ProductLayout.js";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductSetsSushi({ handleAddToCart }) {

  return (
    <section className="section__product__sets">
      <h1 className="product__title" id="sets">
        Сеты
        <img
          src="/ImgSectionMenu/icon/sushi__sets.svg"
          alt="sets"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__sets">
        {products.sets && products.sets.length > 0 ? (
          products.sets.map((product) => (
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

SectionProductSetsSushi.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SectionProductSetsSushi;

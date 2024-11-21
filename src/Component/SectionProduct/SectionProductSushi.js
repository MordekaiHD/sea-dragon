import PropTypes from "prop-types";
import ProductLayout from "../SectionProduct/ProductLayout";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductSushi({ handleAddToCart }) {

  return (
    <section className="section__product__sushi">
      <h1 className="product__title"  id="sushi">
        Суши
        <img
          src="/ImgSectionMenu/sushi/sushi.png"
          alt="sushi"
          className="product__title__img"
        />
      </h1>
      <article className="product__article__sushi">
        {products.suchi && products.suchi.length > 0 ? (
          products.suchi.map((product) => (
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

SectionProductSushi.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default SectionProductSushi;

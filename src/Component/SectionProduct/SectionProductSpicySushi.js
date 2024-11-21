import ProductLayout from "../SectionProduct/ProductLayout";
import products from "../ProductJSON/ProductSushi.js";

function SectionProductSpicySushi({ handleAddToCart }) {

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
        {products.spicy__sushi && products.spicy__sushi.length > 0 ? (
          products.spicy__sushi.map((product) => (
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

export default SectionProductSpicySushi;

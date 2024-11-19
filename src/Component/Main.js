import ProductLayout from "./ProductLayout";
import products from "./ProductJSON/ProductSushi.js";
import IconsCart from "./IconsCart.js";
import Cart from "./Cart.js";
import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Main() {
  const suchi = products.suchi;
  const spicySushi = products.spicy__sushi;
  const suchiBaked = products.baked__sushi;

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);  // Состояние для хранения товаров в корзине

  // Функция для изменения состояния видимости корзины
  const handleButtonClick = () => {
    setIsCartVisible(!isCartVisible);  // Переключаем видимость корзины
  };

  // Функция для добавления товара в корзину или увеличения его количества
  const handleAddToCart = (product) => {
    // Проверяем, есть ли уже этот товар в корзине
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Если товар уже есть, увеличиваем его количество
      onUpdateQuantity(product.id, existingItem.quantity + 1);
    } else {
      // Если товара нет в корзине, добавляем новый товар с количеством 1
      setCartItems(prevItems => [
        ...prevItems,
        { ...product, quantity: 1 },
      ]);
    }
  };


  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Функция для обновления количества товара
  const onUpdateQuantity = (id, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };


  const settings = {
    dots: true,           // Отображение точек навигации
    infinite: true,       // Зацикленная прокрутка
    speed: 1000,           // Скорость анимации слайда (в миллисекундах)
    slidesToShow: 1,      // Сколько слайдов показывать одновременно
    slidesToScroll: 1,    // Сколько слайдов прокручивать за раз
    autoplay: false,       // Включить автопрокрутку
    autoplaySpeed: 5000,
    arrows: false,   // Интервал автопрокрутки (в миллисекундах)
  };

  return (
    <main className="main">

      <Slider {...settings}>
        <div>
          <img className="img__slider" src="/ImgSlider/pexels-frans-van-heerden-201846-670705.jpg" />
        </div>
        <div>
          <img className="img__slider" src="/ImgSlider/pexels-pixabay-357756.jpg" />
        </div>
        <div>
          <img className="img__slider" src="/ImgSlider/pexels-rajesh-tp-749235-2098085.jpg" />
        </div>
        <div>
          <img className="img__slider" src="/ImgSlider/pexels-valeriya-1148086.jpg" />
        </div>
      </Slider>


      <nav className="menu__nav">
        <a href="#sushi" className="menu__link">
          <p className="menu__text">Суши</p>
        </a>
        <a href="#sharp__sushi" className="menu__link">
          <p className="menu__text">Острые суши</p>
        </a>
        <a href="#baked__sushi" className="menu__link">
          <p className="menu__text">Запечённые суши</p>
        </a>
        <a href="#cold__rolls" className="menu__link">
          <p className="menu__text">Холодные роллы</p>
        </a>
        <a href="#baked__rolls" className="menu__link">
          <p className="menu__text">Запечённые роллы</p>
        </a>
        <a href="#tempura" className="menu__link">
          <p className="menu__text">Темпура</p>
        </a>
        <a href="#" className="menu__link">
          <p className="menu__text">Сеты</p>
        </a>
      </nav>

      <section className="section__product__sushi">
        <h1 className="product__title" id="sushi">
          Суши
        </h1>
        <article className="product__article__sushi">
          {suchi.map((product) => (
            <ProductLayout
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              text={product.text}
              weight={product.weight}
              price={product.price}
              quantity={product.quantity}
              onAddToCart={handleAddToCart}  // Передаем функцию для добавления в корзину
            />
          ))}
        </article>
      </section>

      <section className="section__product__spicy__sushi">
        <h1 className="product__title" id="sharp__sushi">
          Острые суши
          <img
            src="/ImgSectionMenu/chilli-pepper.png"
            alt="chilli-pepper"
            className="product__title__img"
          />
        </h1>
        <article className="product__article__sushi__spicy">
          {spicySushi.map((product) => (
            <ProductLayout
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              text={product.text}
              weight={product.weight}
              price={product.price}
              quantity={product.quantity}
              className="color-red"
              onAddToCart={handleAddToCart}  // Передаем функцию для добавления в корзину
            />
          ))}
        </article>
      </section>

      <section className="section__product__baked__sushi">
        <h1 className="product__title" id="baked__sushi">
          Запечённые суши
          <img
            src="/ImgSectionMenu/fire.png"
            alt="fire"
            className="product__title__img"
          />
        </h1>
        <article className="product__article__sushi__baked">
          {suchiBaked.map((product) => (
            <ProductLayout
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              text={product.text}
              weight={product.weight}
              price={product.price}
              quantity={product.quantity}
              onAddToCart={handleAddToCart}  // Передаем функцию для добавления в корзину
            />
          ))}
        </article>
      </section>

      <IconsCart
        onButtonClick={handleButtonClick}
        isCartVisible={cartItems.length > 0}
        items={cartItems} />

      {isCartVisible && <Cart items={cartItems} onRemoveItem={handleRemoveFromCart} onUpdateQuantity={onUpdateQuantity} />}

    </main>
  );
}

export default Main;

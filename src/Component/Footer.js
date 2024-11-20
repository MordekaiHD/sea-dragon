import SushiBarLocation from "./SushiBarLocation";

function Footer() {
  return (
    <footer className="footer">

      <SushiBarLocation />

      <section className="footer__logo">
        <a href="#" className="footer__logo__link">
          <div className="footer__logo__dragon">
            <img src="/ImgHeader/Dragon_Logo.png" alt="logo" className="footer__logo__img"></img>
          </div>
          <div className="footer__logo__title">
            <h1 className="footer__logo__title">Морской Дракон</h1>
            <p className="footer__logo__text">суши - роллы</p>
          </div>
        </a>
      </section>
      <nav className="footer__nav">
        <article className="footer__nav__info">
          <h1 className="footer__nav__info-tittle">Навигация</h1>
          <a href="#" className="footer__nav__info-text">Главная</a>
          <a href="#" className="footer__nav__info-text">Доставка</a>
          <a href="#" className="footer__nav__info-text">О нас</a>
        </article>
        <article className="footer__nav__order">
          <h1 className="footer__nav__order-title">Оформить заказ</h1>
          <a href="tel:+375 (33) 902-93-42" className="footer__nav__order-tel">+375 (33) 902-93-42</a>
          <a href="tel:+375 (33) 902-93-42" className="footer__nav__order-tel">+375 (33) 902-93-42</a>
        </article>
        <article className="footer__nav__workingTime">
          <h1 className="footer__nav__workingTime-title">Время доставки</h1>
          <p className="footer__nav__workingTime-text">с 10:00 до 22:00</p>
        </article>
      </nav>
    </footer>
  );
}

export default Footer;
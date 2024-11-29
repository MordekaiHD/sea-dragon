import SushiBarLocation from "./Feature/SushiBarLocation";

function Footer() {
  return (
    <footer className="footer">
      <SushiBarLocation />

      <section className="footer__logo">
        <a href="#header" className="footer__logo__link">
          <div className="footer__logo__dragon">
            <img
              src="/ImgHeader/Dragon_Logo.png"
              alt="logo"
              className="footer__logo__img"
            />
          </div>
          <div className="footer__logo__title">
            <h1 className="footer__logo__title">Морской Дракон</h1>
            <p className="footer__logo__text">суши - роллы</p>
          </div>
        </a>
      </section>

      <nav className="footer__nav">
        <article className="footer__nav__order">
          <h1 className="footer__nav__order-title">Оформить заказ</h1>
          <a href="tel:+375339029342" className="footer__nav__order-tel">+375 (33) 902-93-42</a>
          <div className="footer__nav__order-info">
            <a
              href="https://www.instagram.com/morskoy_drakon2023?igsh=MTdhbnYxcXA0ZGF3ZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src='/ImgSectionMenu/icon/instagram.svg'
                alt='Instagram'
                className="menu__nav__modal-img"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.foodpicasso.morskoydrakon&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src='/ImgSectionMenu/icon/google-play.svg'
                alt='Google Play'
                className="menu__nav__modal-img"
              />
            </a>
            <a
              href="https://apps.apple.com/by/app/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D0%B8/id6478165944"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src='/ImgSectionMenu/icon/app-store.svg'
                alt='App Store'
                className="menu__nav__modal-img"
              />
            </a>
          </div>
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

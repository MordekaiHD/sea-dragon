import SushiBarLocation from "./SushiBarLocation";

function Footer() {
  return (
    <footer class="footer">

        <SushiBarLocation />

      <section class="footer__logo">
        <a href="#" class="footer__logo__link">
          <div class="footer__logo">
            <img src="/ImgHeader/Dragon_Logo.png" alt="logo" class="footer__logo__img"></img>
          </div>
          <div class="footer__logo__title">
            <h1 class="footer__title">Морской Дракон</h1>
            <p class="footer__text">суши - роллы</p>
          </div>
        </a>
        <div class="footer__logo__store">
          <a href="https://apps.apple.com/by/app/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D0%B8/id6478165944"
            class="footer__link" type="button" target="_blank">
            <img src="/ImgFooter/appStore.svg" alt="appStore"></img>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.foodpicasso.morskoydrakon" class="footer__link"
            type="button" target="_blank">
            <img src="/ImgFooter/googlePlay.svg" alt="googlePlay"></img>
          </a>
        </div>
      </section>
      <nav class="footer__nav">
        <article class="footer__article__nav">
          <h1 class="article__nav__tittle">Навигация</h1>
          <a href="#" class="article__nav__text">Главная</a>
          <a href="#" class="article__nav__text">Доставка</a>
          <a href="#" class="article__nav__text">О нас</a>
          <a href="#" class="article__nav__text">Карзина</a>
        </article>
        <article class="footer__article__order">
          <h1 class="article__order__title">Оформить заказ</h1>
          <a href="tel:+375 (33) 902-93-42" class="article__oreder__tel">+375 (33) 902-93-42</a>
          <a href="tel:+375 (33) 902-93-42" class="article__oreder__tel">+375 (33) 902-93-42</a>
        </article>
        <article class="footer__article__workingTime">
          <h1 class="article__workingTime__title">Время доставки</h1>
          <p class="article__workingTime__text">с 10:00 до 22:00</p>
        </article>
        <article class="footer__article__socialNetworks">
          <h1 class="article__socialNetworks__title">Мы в соц. сетях</h1>
          <a href="https://www.instagram.com/morskoy_drakon2023?igsh=dndjMXp4OGRvNmQ2" target="_blank"
            class="article__socialNetworks__link"><img src="/ImgFooter/instagram.svg" alt="instagram"
              class="article__socialNetworks__instagram"></img></a>
        </article>
      </nav>
    </footer>
  );
}

export default Footer;
function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <a href="#" className="header__logo__link">
          <div className="header__logo__img">
            <img
              src="/ImgHeader/Dragon_Logo.png"
              alt="logo"
              className="header__logo__img"
            />
          </div>
          <div className="logo__title">
            <h1 className="header__title">Морской Дракон</h1>
            <p className="header__text">суши - роллы</p>
          </div>
        </a>
      </section>
      <nav className="header__nav">
        <a href="#sushi" className="header__nav__link">
          <h2 className="header__nav__title">Меню</h2>
        </a>
        <a href="#" className="header__nav__link">
          <h2 className="header__nav__title">Акции</h2>
        </a>
        <a href="#" className="header__nav__link">
          <h2 className="header__nav__title">Доставка</h2>
        </a>
      </nav>
    </header>
  );
}

export default Header;
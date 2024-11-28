import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <section className="header__logo">
        <Link to="/" className="header__logo__link">
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
        </Link>
      </section>
    </header>
  );
}

export default Header;

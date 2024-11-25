import { Link } from "react-router-dom"; // Импорт компонента Link для создания маршрутов

function Header() {
  return (
    <header className="header">
      {/* Логотип и текстовый блок */}
      <section className="header__logo">
        {/* Использование компонента Link для маршрутизации */}
        <Link to="/" className="header__logo__link">
          {/* Обёртка для логотипа */}
          <div className="header__logo__img">
            <img
              src="/ImgHeader/Dragon_Logo.png" // Путь к логотипу
              alt="logo" // Описание для доступности
              className="header__logo__img"
            />
          </div>
          {/* Текстовый блок с названием и описанием */}
          <div className="logo__title">
            <h1 className="header__title">Морской Дракон</h1>
            <p className="header__text">суши - роллы</p>
          </div>
        </Link>
      </section>
    </header>
  );
}

export default Header; // Экспорт компонента для использования в приложении

import React, { useState, useEffect, useMemo } from 'react';

function MenuNav() {
  const [activeSection, setActiveSection] = useState('');
  const [modalContent, setModalContent] = useState(null); 

  const sections = useMemo(() => [
    { id: 'sushi', name: 'Суши' },
    { id: 'sharp__sushi', name: 'Острые суши' },
    { id: 'baked__sushi', name: 'Запечённые суши' },
    { id: 'cold__rolls', name: 'Холодные роллы' },
    { id: 'baked__rolls', name: 'Запечённые роллы' },
    { id: 'tempura', name: 'Темпура' },
    { id: 'sets', name: 'Сеты' },
  ], []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.querySelector(`#${section.id}`);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(`#${section.id}`);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const toggleModal = (content) => {
    setModalContent(prevContent => (prevContent ? null : content));
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>

      <div className="menu__position">
        <div className="menu">
          {/* Кнопка для гамбургер-меню */}
          <button
            className="menu__toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Навигационное меню для больших экранов */}
          <nav className={`menu__nav ${isMenuOpen ? 'menu__nav--open' : ''}`}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`menu__link ${activeSection === section.id ? 'active' : ''}`}
                aria-current={activeSection === section.id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <p className="menu__text">{section.name}</p>
              </a>
            ))}
          </nav>

          {/* Фон для затемнения, если гамбургер-меню открыто */}
          {isMenuOpen && <div className="menu__backdrop" onClick={toggleMenu}></div>}
        </div>
      </div>

      <div className="menu__info__position">
        <nav className="menu__nav__info">
          {[
            {
              href: '#',
              text: 'Доставка',
              content: (
                <>
                  <h1>Условия доставки</h1>
                  <p className="menu__nav__modal-text">Суши-бар "Морской дракон" предлагает быструю и удобную доставку вашего заказа!</p>
                  <h1>Как оформить заказ:</h1>
                  <ul>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">На сайте "Морской дракон"</p></li>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">По телефону +375 (XX) XXX-XX-XX.</p></li>
                    <li className='menu__nav__modal-li'>
                      <div className="menu__nav__modal-text menu__nav__modal-media">
                        В Instagram или нашем приложении:
                        <div className='menu__nav__modal-position'>
                          <a href="https://www.instagram.com/morskoy_drakon2023?igsh=MTdhbnYxcXA0ZGF3ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/instagram.svg' alt='instagram' className="menu__nav__modal-img" /></a>
                          <a href="https://play.google.com/store/apps/details?id=com.foodpicasso.morskoydrakon&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/google-play.svg' alt='annex' className="menu__nav__modal-img" /></a>
                          <a href="https://apps.apple.com/by/app/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D0%B8/id6478165944" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/app-store.svg' alt='annex' className="menu__nav__modal-img" /></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h1>Время доставки:</h1>
                  <ul>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">В праздничные и выходные дни время ожидания может увеличиться.</p></li>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">Среднее время доставки по Мозырю — 60 минут.</p></li>
                  </ul>
                  <h1>Стоимость и зоны доставки:</h1>
                  <ul>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">При заказе на сумму от 20 рублей доставка по Мозырю обойдется всего в 1 рубль.</p></li>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">Если заказ до 20 рублей, доставка составит 2,5 рубля.</p></li>
                  </ul>
                  <h1>Оплата:</h1>
                  <ul>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">Принимаем оплату наличными или банковской картой.</p></li>
                    <li className='menu__nav__modal-li'><p className="menu__nav__modal-text ">Все расчеты производятся в белорусских рублях.</p></li>
                  </ul>
                  <hr className="cart__divider" />
                  <p className="menu__nav__modal-text">Мы гарантируем качество, свежесть и оперативность!</p>
                </>
              ),
            },
            {
              href: '#', text: 'Контакты', content: <>
                <h1>Контакты</h1>
                <p className="menu__nav__modal-text">Мы всегда рады вашим звонкам и заказам! Если у вас есть вопросы, пожелания или вы хотите оформить заказ, свяжитесь с нами удобным для вас способом:</p>
                <ul>
                  <li className='menu__nav__modal-li '><p className="menu__nav__modal-text">Телефон: +375 (XX) XXX-XX-XX</p> </li>
                  <li className='menu__nav__modal-li'><p className="menu__nav__modal-text">Адрес: г. Мозырь, ул. Примерная, 10</p> </li>
                </ul>
                <h1>Часы работы:</h1>
                <ul>
                  <li className="menu__nav__modal-text menu__nav__modal-li" >Пн-Чт: 11:00 – 22:00</li>
                  <li className="menu__nav__modal-text menu__nav__modal-li" >Пт-Вс: 11:00 – 23:00</li>
                </ul>
                <h1>Соцсети:</h1>
                <div className="menu__nav__modal-text menu__nav__modal-media">
                  Следите за нашими новостями, акциями и обновлениями меню в социальных сетях:
                  <div className='menu__nav__modal-position'>
                    <a href="https://www.instagram.com/morskoy_drakon2023?igsh=MTdhbnYxcXA0ZGF3ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/instagram.svg' alt='instagram' className="menu__nav__modal-img" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.foodpicasso.morskoydrakon&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/google-play.svg' alt='annex' className="menu__nav__modal-img" /></a>
                    <a href="https://apps.apple.com/by/app/%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD-%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D0%B8/id6478165944" target="_blank" rel="noopener noreferrer"><img src='/ImgSectionMenu/icon/app-store.svg' alt='annex' className="menu__nav__modal-img" /></a>
                  </div>
                </div>
                <p className="menu__nav__modal-text">Ждем вас в гостях или с удовольствием доставим ваш заказ!</p>
              </>
            },
          ].map((link, index) => (
            <button
              key={index}
              onClick={() => toggleModal(link.content)}
              className="menu__nav__info__link"
            >
              <p className="menu__nav__info__text">{link.text}</p>
            </button>
          ))}
        </nav>
      </div>

      {modalContent && (
        <div className="menu__nav__modal">
          <div className="menu__nav__modal-content">
            <button className="menu__nav__modal-close" onClick={toggleModal}>×</button>
            {modalContent}
          </div>
          <div className="menu__nav__modal-backdrop" onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
}

export default MenuNav;


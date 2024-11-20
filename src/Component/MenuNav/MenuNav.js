import React, { useState, useEffect } from 'react';

function MenuNav() {

  const [activeSection, setActiveSection] = useState('');

  // Функция для отслеживания прокрутки
  const handleScroll = () => {
    const sections = ['#sushi', '#sharp__sushi', '#baked__sushi', '#cold__rolls', '#baked__rolls', '#tempura', '#sets'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element && window.scrollY >= element.offsetTop - 100) { // 100px до начала секции
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  // Добавляем обработчик события прокрутки
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="menu__nav">
        <a
          href="#sushi"
          className={`menu__link ${activeSection === '#sushi' ? 'active' : ''}`}
        >
          <p className="menu__text">Суши</p>
        </a>
        <a
          href="#sharp__sushi"
          className={`menu__link ${activeSection === '#sharp__sushi' ? 'active' : ''}`}
        >
          <p className="menu__text">Острые суши</p>
        </a>
        <a
          href="#baked__sushi"
          className={`menu__link ${activeSection === '#baked__sushi' ? 'active' : ''}`}
        >
          <p className="menu__text">Запечённые суши</p>
        </a>
        <a
          href="#cold__rolls"
          className={`menu__link ${activeSection === '#cold__rolls' ? 'active' : ''}`}
        >
          <p className="menu__text">Холодные роллы</p>
        </a>
        <a
          href="#baked__rolls"
          className={`menu__link ${activeSection === '#baked__rolls' ? 'active' : ''}`}
        >
          <p className="menu__text">Запечённые роллы</p>
        </a>
        <a
          href="#tempura"
          className={`menu__link ${activeSection === '#tempura' ? 'active' : ''}`}
        >
          <p className="menu__text">Темпура</p>
        </a>
        <a
          href="#sets"
          className={`menu__link ${activeSection === '#sets' ? 'active' : ''}`}
        >
          <p className="menu__text">Сеты</p>
        </a>
      </nav>
      <nav className="menu__nav__info">
        <a href="#" className="menu__nav__info__link">
          <h2 className="menu__nav__info__text">Акции</h2>
        </a>
        <a href="#" className="menu__nav__info__link">
          <h2 className="menu__nav__info__text">Доставка</h2>
        </a>
        <a href="#sushi" className="menu__nav__info__link">
          <h2 className="menu__nav__info__text">О нас</h2>
        </a>
      </nav>
    </>
  );
}

export default MenuNav;
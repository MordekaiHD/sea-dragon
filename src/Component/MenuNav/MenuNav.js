import React, { useState, useEffect, useMemo } from 'react';

function MenuNav() {
  const [activeSection, setActiveSection] = useState('');

  // Мемоизация массива секций
  const sections = useMemo(() => [
    { id: 'sushi', name: 'Суши' },
    { id: 'sharp__sushi', name: 'Острые суши' },
    { id: 'baked__sushi', name: 'Запечённые суши' },
    { id: 'cold__rolls', name: 'Холодные роллы' },
    { id: 'baked__rolls', name: 'Запечённые роллы' },
    { id: 'tempura', name: 'Темпура' },
    { id: 'sets', name: 'Сеты' },
  ], []);

  // Добавляем debounce для оптимизации скролла
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.querySelector(`#${section.id}`);
        return element && window.scrollY >= element.offsetTop - 100;
      });
      setActiveSection(currentSection ? currentSection.id : '');
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sections]);

  return (
    <>
      <nav className="menu__nav">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`menu__link ${activeSection === section.id ? 'active' : ''}`}
            aria-current={activeSection === section.id ? 'page' : undefined}
          >
            <p className="menu__text">{section.name}</p>
          </a>
        ))}
      </nav>
      <nav className="menu__nav__info">
        {[
          { href: '#', text: 'Акции' },
          { href: '#', text: 'Доставка' },
          { href: '#sushi', text: 'О нас' },
        ].map((link, index) => (
          <a key={index} href={link.href} className="menu__nav__info__link">
            <h2 className="menu__nav__info__text">{link.text}</h2>
          </a>
        ))}
      </nav>
    </>
  );
}

export default MenuNav;

// import React, { useState, useEffect, useMemo } from 'react';

// function MenuNav() {
//   const [activeSection, setActiveSection] = useState('');

//   // Мемоизация массива секций
//   const sections = useMemo(() => [
//     { id: 'sushi', name: 'Суши' },
//     { id: 'sharp__sushi', name: 'Острые суши' },
//     { id: 'baked__sushi', name: 'Запечённые суши' },
//     { id: 'cold__rolls', name: 'Холодные роллы' },
//     { id: 'baked__rolls', name: 'Запечённые роллы' },
//     { id: 'tempura', name: 'Темпура' },
//     { id: 'sets', name: 'Сеты' },
//   ], []);

//   // Добавляем debounce для оптимизации скролла
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.5, // Срабатывает, если 50% элемента в зоне видимости
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, observerOptions);

//     sections.forEach((section) => {
//       const element = document.querySelector(`#${section.id}`);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sections.forEach((section) => {
//         const element = document.querySelector(`#${section.id}`);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, [sections]);

//   return (
//     <>
//       <nav className="menu__nav">
//         {sections.map((section) => (
//           <a
//             key={section.id}
//             href={`#${section.id}`}
//             className={`menu__link ${activeSection === section.id ? 'active' : ''}`}
//             aria-current={activeSection === section.id ? 'page' : undefined}
//           >
//             <p className="menu__text">{section.name}</p>
//           </a>
//         ))}
//       </nav>
//       <nav className="menu__nav__info">
//         {[
//           { href: '#', text: 'Акции' },
//           { href: '#', text: 'Доставка' },
//           { href: '#', text: 'О нас' },
//         ].map((link, index) => (
//           <a key={index} href={link.href} className="menu__nav__info__link">
//             <h2 className="menu__nav__info__text">{link.text}</h2>
//           </a>
//         ))}
//       </nav>
//     </>
//   );
// }

// export default MenuNav;


import React, { useState, useEffect, useMemo } from 'react';

function MenuNav() {
  const [activeSection, setActiveSection] = useState('');
  const [modalContent, setModalContent] = useState(null); // Хранит контент для модального окна

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
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Срабатывает, если 50% элемента в зоне видимости
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

  // Функция для отображения модального окна
  const openModal = (content) => {
    setModalContent(content);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalContent(null);
  };

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
          { href: '#', text: 'Акции', content: <p>Скоро тут будут акции!</p> },
          {
            href: '#',
            text: 'Доставка',
            content: (
              <>
                <h2>Условия доставки</h2>
                <p>Суши-бар "Название" предлагает быструю и удобную доставку вашего заказа!</p>
                <h3>Как оформить заказ:</h3>
                <ul>
                  <li>На сайте Название сайта.</li>
                  <li>По телефону +375 (XX) XXX-XX-XX.</li>
                </ul>
                <h3>Время доставки:</h3>
                <ul>
                  <li>Среднее время доставки по Мозырю — 60 минут.</li>
                  <li>В праздничные и выходные дни время ожидания может увеличиться.</li>
                </ul>
                <h3>Стоимость и зоны доставки:</h3>
                <ul>
                  <li>При заказе на сумму от 27 рублей доставка по Мозырю обойдется всего в 1 рубль.</li>
                  <li>Если заказ до 27 рублей, доставка составит 4,5 рубля.</li>
                  <li>Доставка в Козенки и на Станцию "Мозырь" — от 4,5 рублей, при заказе на сумму от 45 рублей.</li>
                </ul>
                <h3>Оплата:</h3>
                <ul>
                  <li>Принимаем оплату наличными или банковской картой.</li>
                  <li>Все расчеты производятся в белорусских рублях.</li>
                </ul>
                <p>⚠️ Обратите внимание на обновленные зоны доставки! Перед оформлением заказа уточните возможность доставки в ваш район.</p>
                <p>Мы гарантируем качество, свежесть и оперативность!</p>
              </>
            ),
          },
          { href: '#', text: 'О нас', content: <p>Мы лучшие в городе!</p> },
        ].map((link, index) => (
          <button
            key={index}
            onClick={() => openModal(link.content)}
            className="menu__nav__info__link"
          >
            <h2 className="menu__nav__info__text">{link.text}</h2>
          </button>
        ))}
      </nav>


      {/* Модальное окно */}
      {modalContent && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>×</button>
            {modalContent}
          </div>
          <div className="modal__backdrop" onClick={closeModal}></div>
        </div>
      )}
    </>
  );
}

export default MenuNav;

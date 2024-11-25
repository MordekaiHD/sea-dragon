import React from 'react'; // Импорт библиотеки React
import './Style/Main/style.css'; // Подключение глобального CSS для всего приложения
import Header from './Component/Header'; // Импорт компонента Header
import Footer from './Component/Footer'; // Импорт компонента Footer
import Main from './Component/Main'; // Импорт основного контента Main

// Главный компонент приложения
function App() {
  return (
    <div className="App">
      {/* Верхняя часть страницы */}
      <Header />
      {/* Основной контент */}
      <Main />
      {/* Нижняя часть страницы */}
      <Footer />
    </div>
  );
}

export default App; // Экспорт компонента App для использования в других файлах

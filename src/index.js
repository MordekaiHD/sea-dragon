import React from 'react'; // Подключение библиотеки React
import ReactDOM from 'react-dom/client'; // Импорт нового API для рендеринга в React 18+
import './index.css'; // Подключение глобальных стилей
import App from './App'; // Главный компонент приложения
import reportWebVitals from './reportWebVitals'; // Инструмент для измерения производительности
import { Provider } from 'react-redux'; // Провайдер для интеграции Redux с React
import { BrowserRouter } from "react-router-dom"; // Обёртка для маршрутизации в приложении
import store from './store'; // Импорт хранилища Redux

// Создание корневого элемента React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг приложения в строгом режиме
root.render(
  <React.StrictMode>
    {/* Провайдер Redux, обеспечивающий доступ к хранилищу из любого компонента */}
    <Provider store={store}>
      {/* Обёртка маршрутизатора для поддержки маршрутов */}
      <BrowserRouter>
        <App /> {/* Главный компонент приложения */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Настройка инструмента для измерения производительности
// Вы можете передать функцию (например, console.log) для получения данных
reportWebVitals();

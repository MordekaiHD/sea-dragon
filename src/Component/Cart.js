import React, { useState, useEffect, useRef } from 'react';

function Cart({ items, onRemoveItem, onUpdateQuantity }) {

  // const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('');
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isVisible, setIsVisible] = useState(true); // Состояние для видимости корзины
  const cartRef = useRef(null); // Реф для контейнера корзины

  // // Обработчик изменения выбранной опции доставки
  // const handleDeliveryOptionChange = (event) => {
  //   setSelectedDeliveryOption(event.target.value);
  // };

  // // Обработчик изменения выбранного способа оплаты
  // const handlePaymentMethodChange = (event) => {
  //   setSelectedPaymentMethod(event.target.value);
  // };

  const onIncreaseQuantity = (id) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      onUpdateQuantity(id, existingItem.quantity + 1);
    }
  };

  const onDecreaseQuantity = (id) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        onUpdateQuantity(id, existingItem.quantity - 1);
      } else {
        onRemoveItem(id);
      }
    }
  };

  // Вычисляем общую сумму всех товаров в корзине
  const totalAmount = items.reduce((total, item) => {
    return total + (item.price * item.quantity);  // Умножаем цену на количество для каждого товара
  }, 0); // Начальная сумма равна 0

  // Закрытие корзины при клике вне ее
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsVisible(false); // Скрываем корзину
      document.body.classList.remove('no-scroll'); // Восстанавливаем прокрутку
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isVisible]);

  if (!isVisible) return null; // Если корзина скрыта, не отображаем компонент


  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__order-information" ref={cartRef}>
          <h1 className="cart__title">Ваш заказ</h1>

          {items.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            items.map((item) => (
              <div className="cart__product" key={item.id}>
                <img src={item.img} alt={item.title} className="cart__img" />
                <p>{item.title}</p>
                <div className="cart__quantity">
                  <button
                    className="cart__button-decrease"
                    onClick={() => onDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="cart__button-increase"
                    onClick={() => onIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="cart__button-delete"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Удалить
                </button>
              </div>
            ))
          )}

          {/* Отображение общей суммы */}
          <div className="cart__order-amount">
            <p>Общая сумма: {totalAmount} руб.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

{/* 
          <div className="cart__order-details">
            <p>Ваше имя</p>
            <input />

            <p>Время для предварительного заказа</p>
            <input />

            <p>*Оставьте пустым, если желаете на ближайшее доступное время</p>
            <input type="text" placeholder="19:00" />

            <p>Ваш номер телефона</p>
            <input type="text" placeholder="+375 99 999 99" />

            <p>Варианты доставки</p>
            <p>* доставка по Мозырю составляет 1 рубль.</p>

            {[
              'Самовывоз (Мозырь, Гагарина 93)',
              'Доставка',
              'Доставка в район Полесской',
              'Доставка в район Станции Мозырь',
            ].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="delivery"
                  value={option}
                  checked={selectedDeliveryOption === option}
                  onChange={handleDeliveryOptionChange}
                />
                {option}
              </label>
            ))}

            <p>Ваш адрес</p>
            <p>*Поставьте прочерк, если у вас Самовывоз</p>
            <input type="text" placeholder="" />

            <p>Метод оплаты</p>

            {['Наличными при получении', 'Картой'].map((method) => (
              <label key={method}>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={selectedPaymentMethod === method}
                  onChange={handlePaymentMethodChange}
                />
                {method}
              </label>
            ))}

            <p>Комментарий к заказу</p>
            <p>(Если у вас есть код домофона, или другие особенности доставки, просьба указать их здесь)</p>
            <input type="text" placeholder="" />

            <p>Время доставки с 11:00 до 23:00</p>

            <p>Промокод</p>
            <input type="text" placeholder="" />
          </div>

          <div className="cart__order-amount">
            <p>Сумма</p>
            <p>Доставка</p>
            <p>Итоговая сумма</p>
          </div>

          <div className="cart__button">
            <button className="cart__button__shopping">Оформить заказ</button>
          </div> */}

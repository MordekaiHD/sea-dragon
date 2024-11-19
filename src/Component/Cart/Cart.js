import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalAmount,
} from '../../store/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems); // Получаем товары из состояния корзины
  const totalAmount = useSelector(selectTotalAmount); // Общая сумма товаров
  const [isVisible, setIsVisible] = useState(true); // Состояние видимости корзины
  const cartRef = useRef(null); // Реф для корзины

  const onIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 })); // Увеличиваем количество на 1
  };

  const onDecreaseQuantity = (id) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: -1 })); // Уменьшаем количество на 1
    } else {
      dispatch(removeItem(id)); // Удаляем товар, если количество <= 1
    }
  };

  // Закрытие корзины при клике вне нее
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsVisible(false);
      document.body.classList.remove('no-scroll');
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

  if (!isVisible) return null; // Скрываем компонент, если isVisible = false

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
                  onClick={() => dispatch(removeItem(item.id))}
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

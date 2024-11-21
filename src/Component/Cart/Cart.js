import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalAmount,
  clearCart,
} from '../../store/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems); // Получаем товары из состояния корзины
  const totalAmount = useSelector(selectTotalAmount); // Общая сумма товаров
  const [isVisible, setIsVisible] = useState(true); // Состояние видимости корзины
  const cartRef = useRef(null); // Реф для корзины

  // Локальное состояние для формы
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [coupon, setCoupon] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryTime, setDeliveryTime] = useState(''); // Время доставки

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryTime: '', // Ошибка для времени доставки
  });

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Введите имя';
    }

    if (!phone.trim() || !/^\+?\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (deliveryMethod === 'courier' && !address.trim()) {
      newErrors.address = 'Адрес доставки обязателен для курьерской доставки';
    }

    if (!deliveryTime.trim()) {
      newErrors.deliveryTime = 'Выберите время доставки';
    }

    return newErrors;
  };


  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const orderData = {
      items,
      totalAmount,
      deliveryMethod,
      address,
      name,
      phone,
      comments,
      coupon,
      paymentMethod,
      deliveryTime,
    };

    console.log('Order submitted:', orderData);
    alert('Заказ успешно отправлен!');

    // Очистка корзины после отправки заказа
    dispatch(clearCart()); // Очистить корзину

    // Очистить форму после отправки
    resetForm();
  };

  const resetForm = () => {
    setAddress('');
    setName('');
    setPhone('');
    setComments('');
    setCoupon('');
    setDeliveryMethod('courier');
    setPaymentMethod('card');
    setDeliveryTime('');
    setErrors({});
  };


  const onIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const onDecreaseQuantity = (id) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: -1 }));
    } else {
      dispatch(removeItem(id));
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

  if (!isVisible) return null;

  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__order" ref={cartRef}>
          <h1 className="cart__title">Ваш заказ</h1>
          <div className="cart__order-information">
            <hr
              style={{
                border: '1px solid #fff',
                margin: '20px 0',
                boxShadow: '0 0 10px #1074bb, 0 0 20px #1074bb, 0 0 30px #1074bb', // Обратите внимание на стиль 'boxShadow' с заглавной буквой
              }}
            />

            {items.length === 0 ? (
              <p className='cart__order-empty'>КОРЗИНА ПУСТАЯ <img className="cart__order-empty-img" src='/ImgSectionMenu/cart.svg' /></p>
            ) : (
              items.map((item) => (
                <div className="cart__order__product" key={item.id}>
                  <div className="cart__order__product__img">
                    <img
                      className="cart__order__product__img-style"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  <div className="cart__order__product__text">
                    <p className="cart__order__product__text-style">{item.title}</p>
                  </div>

                  <div className="cart__order__product__quantity">
                    <button
                      className="cart__order__product__quantity__button-decrease"
                      onClick={() => onDecreaseQuantity(item.id)}
                    >
                      <img className='cart__order__product__quantity__button-count' src='/ImgSectionMenu/minusIcon2.svg' />

                    </button>
                    <span className="cart__order__product__quantity__button-style">
                      {item.quantity}
                    </span>
                    <button
                      className="cart__order__product__quantity__button-increase"
                      onClick={() => onIncreaseQuantity(item.id)}
                    >
                      <img className='cart__order__product__quantity__button-count' src='/ImgSectionMenu/plusIcon.svg' />
                    </button>
                  </div>

                  <div className="cart__order__product__button">
                    <button
                      className="cart__order__product__button-delete"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <img className='cart__order__product__button-img' src='/ImgSectionMenu/deleteIcon2.svg' />

                    </button>
                  </div>
                </div>
              ))
            )}
            <hr
              style={{
                border: '1px solid #fff',
                margin: '20px 0',
                boxShadow: '0 0 10px #1074bb, 0 0 20px #1074bb, 0 0 30px #1074bb', // Обратите внимание на стиль 'boxShadow' с заглавной буквой
              }}
            />
          </div>

          <div className="cart__order-delivery">
            <h2>Выберите способ доставки:</h2>
            <select
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value)}
            >
              <option value="courier">Курьер</option>
              <option value="pickup">Самовывоз</option>
              <option value="post">Почта</option>
            </select>

          </div>

          <div className="cart__order-delivery-time">
            <h2>Выберите время доставки:</h2>

            <input
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
            {errors.deliveryTime && <p className="error">{errors.deliveryTime}</p>}
          </div>

          <div className="cart__order-address">
            <h2>Адрес доставки</h2>
            <input
              type="text"
              placeholder="Введите адрес"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="cart__order-contact">
            <h2>Контактные данные</h2>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="cart__order-comments">
            <h2>Комментарии к заказу</h2>
            <textarea
              placeholder="Ваши пожелания или комментарии"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>

          <div className="cart__order-coupon">
            <h2>Введите промокод</h2>
            <input
              type="text"
              placeholder="Промокод"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          <div className="cart__order-payment">
            <h2>Выберите способ оплаты:</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Банковская карта</option>
              <option value="cash">Наличные</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="cart__order-amount">
            <p>Общая сумма: {totalAmount} руб.</p>
          </div>

          <div className="cart__order-submit">
            <button className="cart__order-submit-button" onClick={handleSubmit}>
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

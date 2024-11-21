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
  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const [isVisible, setIsVisible] = useState(true);
  const cartRef = useRef(null);

  // Локальное состояние для формы (объединено в один объект)
  const [formData, setFormData] = useState({
    deliveryMethod: 'courier',
    address: '',
    name: '',
    phone: '',
    comments: '',
    coupon: '',
    paymentMethod: 'card',
    deliveryTime: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryTime: '',
  });

  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.phone.trim() || !/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = 'Введите корректный номер телефона';
    if (formData.deliveryMethod === 'courier' && !formData.address.trim())
      newErrors.address = 'Адрес доставки обязателен для курьерской доставки';
    if (!formData.deliveryTime.trim()) newErrors.deliveryTime = 'Выберите время доставки';
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
      ...formData,
    };

    console.log('Order submitted:', orderData);
    alert('Заказ успешно отправлен!');
    dispatch(clearCart()); // Очистить корзину
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      deliveryMethod: 'courier',
      address: '',
      name: '',
      phone: '',
      comments: '',
      coupon: '',
      paymentMethod: 'card',
      deliveryTime: '',
    });
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
    document.body.classList.toggle('no-scroll', isVisible);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__order" ref={cartRef}>
          <h1 className="cart__title">Ваш заказ</h1>
          <div className="cart__order-information">
            <hr className="cart__divider" />

            {items.length === 0 ? (
              <p className="cart__order-empty">
                КОРЗИНА ПУСТАЯ <img className="cart__order-empty-img" src="/ImgSectionMenu/cart.svg" alt="cart" />
              </p>
            ) : (
              items.map((item) => (
                <div className="cart__order__product" key={item.id}>
                  <div className="cart__order__product__img">
                    <img className="cart__order__product__img-style" src={item.img} alt={item.title} />
                  </div>

                  <div className="cart__order__product__text">
                    <p className="cart__order__product__text-style">{item.title}</p>
                  </div>

                  <div className="cart__order__product__quantity">
                    <button className="cart__order__product__quantity__button-decrease" onClick={() => onDecreaseQuantity(item.id)}>
                      <img className="cart__order__product__quantity__button-count" src="/ImgSectionMenu/minusIcon.svg" alt="minus" />
                    </button>
                    <span className="cart__order__product__quantity__button-style">{item.quantity}</span>
                    <button className="cart__order__product__quantity__button-increase" onClick={() => onIncreaseQuantity(item.id)}>
                      <img className="cart__order__product__quantity__button-count" src="/ImgSectionMenu/plusIcon.svg" alt="plus" />
                    </button>
                  </div>

                  <div className="cart__order__product__button">
                    <button className="cart__order__product__button-delete" onClick={() => dispatch(removeItem(item.id))}>
                      <img className="cart__order__product__button-img" src="/ImgSectionMenu/deleteIcon.svg" alt="delete" />
                    </button>
                  </div>
                </div>
              ))
            )}
            <hr className="cart__divider" />
          </div>

          <div className="cart__order-delivery">
            <h2>Выберите способ доставки:</h2>
            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleInputChange}>
              <option value="courier">Курьер</option>
              <option value="pickup">Самовывоз</option>
              <option value="post">Почта</option>
            </select>
          </div>

          <div className="cart__order-delivery-time">
            <h2>Выберите время доставки:</h2>
            <input type="time" name="deliveryTime" value={formData.deliveryTime} onChange={handleInputChange} />
            {errors.deliveryTime && <p className="error">{errors.deliveryTime}</p>}
          </div>

          <div className="cart__order-address">
            <h2>Адрес доставки</h2>
            <input type="text" name="address" placeholder="Введите адрес" value={formData.address} onChange={handleInputChange} />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="cart__order-contact">
            <h2>Контактные данные</h2>
            <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleInputChange} />
            {errors.name && <p className="error">{errors.name}</p>}
            <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleInputChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="cart__order-comments">
            <h2>Комментарии к заказу</h2>
            <textarea name="comments" placeholder="Ваши пожелания или комментарии" value={formData.comments} onChange={handleInputChange}></textarea>
          </div>

          <div className="cart__order-coupon">
            <h2>Введите промокод</h2>
            <input type="text" name="coupon" placeholder="Промокод" value={formData.coupon} onChange={handleInputChange} />
          </div>

          <div className="cart__order-payment">
            <h2>Выберите способ оплаты:</h2>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
              <option value="card">Банковская карта</option>
              <option value="cash">Наличные</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="cart__order-amount">
            <p>Общая сумма: {totalAmount} руб.</p>
          </div>

          <div className="cart__order-submit">
            <button className="cart__order-submit-button" onClick={handleSubmit}>ЗАКАЗАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

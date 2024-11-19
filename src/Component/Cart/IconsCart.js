import { useSelector } from 'react-redux';

function IconsCart({ onButtonClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`cart__icon ${totalQuantity > 0 ? 'show' : ''}`}>
      <button className="cart__icon__button" onClick={onButtonClick}>
        <img className="cart__icon__button__img" src="/ImgSectionMenu/cart.svg" alt="Cart" />
        {totalQuantity > 0 && <span className="cart__icon__button__badge">{totalQuantity}</span>}
      </button>
    </div>
  );
}


export default IconsCart;

import EmptyCartImg from '../assets/img/empty-cart.webp';

const EmptyCart = ({ handleCartClose }) => {
  return (
    <div className="empty">
      <img src={EmptyCartImg} alt="" />
      <button className="cart-btn" onClick={handleCartClose}>
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;

import { Link } from 'react-router-dom';
import EmptyCartImg from '../assets/img/empty-cart.webp';

const EmptyCart = ({ handleCartClick }) => {
  return (
    <div className="empty">
      {/* <h3>Your cart is empty</h3> */}
      <img src={EmptyCartImg} alt="" />
      <Link className="cart-btn" onClick={handleCartClick}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;

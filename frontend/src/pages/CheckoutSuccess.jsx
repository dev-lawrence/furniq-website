import { useContext, useEffect } from 'react';
import CartContext from '../CartContext';
import CheckoutImg from '../assets/img/checkout-success.svg';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <div className="checkout-success">
      <h2>Your order has been placed 🚀</h2>
      <img src={CheckoutImg} alt="successful" />
      {/* To be implemented soon */}
      {/* <Link to="/order">Check your order</Link> */}
      <Link to="/shop">
        <button className="btn">continue shopping</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;

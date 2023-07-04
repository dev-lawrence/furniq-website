import { useContext, useEffect } from 'react';
import CartContext from '../CartContext';

const CheckoutSuccess = () => {
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <div className="pt-section">
      <h2>Checkout Successful</h2>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default CheckoutSuccess;

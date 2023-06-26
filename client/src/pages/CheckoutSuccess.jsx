import { useContext, useEffect } from 'react';
import CartContext from '../CartContext';

const CheckoutSuccess = () => {
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    resetCart(); // Reset the cart when the component mounts
  }, []);
  return (
    <div className="pt-section">
      <h2>Checkout Successful</h2>
      <p>Thank you for your purchase!</p>
      {/* Add any additional content or order details here */}
    </div>
  );
};

export default CheckoutSuccess;

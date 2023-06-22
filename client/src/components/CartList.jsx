import { useContext } from 'react';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import CartItem from './CartItem';

const CartList = ({ cartClick, handleCartClick }) => {
  const { items } = useContext(CartContext);
  const cartNotEmpty = Array.isArray(items) && items.length !== 0;

  const calculateSubTotal = () => {
    let subtotal = 0;

    items.forEach((item) => {
      subtotal += item.quantity * item.price;
    });

    return subtotal.toFixed(2);
  };

  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <button className="close" onClick={handleCartClick}>
            <span>Back to store 🏃‍♂️</span>
          </button>

          <div className="content">
            <div className="cart-products">
              {cartNotEmpty ? (
                items.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <EmptyCart handleCartClick={handleCartClick} />
              )}
            </div>
          </div>

          {cartNotEmpty && (
            <div className="subtotal-container">
              <div className="subtotal">
                <span>Subtotal: ${calculateSubTotal()}</span>
              </div>

              <Link to={'#'} className="checkout">
                <button className="cta">Checkout</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;

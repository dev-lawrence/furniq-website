import { FaTimes } from 'react-icons/fa';

const Cart = ({ cartClick, handleCartClick }) => {
  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <div className="d-flex title">
            <h2>Your Cart</h2>

            <div className="close-icon">
              <FaTimes onClick={handleCartClick} />
            </div>
          </div>

          <div className="content">
            <div>
              <h3>Your cart is empty</h3>
              <a className="cart-btn" href="#">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

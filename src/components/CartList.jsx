import { useContext } from 'react';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import CartItem from './CartItem';

const CartList = ({ cartClick, handleCartClick }) => {
  const { items } = useContext(CartContext);
  const cartNotEmpty = Array.isArray(items) && items.length !== 0;

  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <Link className="close" onClick={handleCartClick}>
            <span>Back to store 🏃‍♂️</span>
          </Link>

          <div className="content">
            <div className="cart-products">
              {cartNotEmpty ? (
                items.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <EmptyCart handleCartClick={handleCartClick} />
              )}
            </div>

            {cartNotEmpty && (
              <div className="fixed">
                <div className="sub-total">
                  <span>Subtotal: $3200.00</span>
                </div>

                <Link to={'#'} className="checkout">
                  <button className="cta">Checkout</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;

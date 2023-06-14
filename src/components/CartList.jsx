import { useContext, useRef, useEffect } from 'react';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import CartItem from './CartItem';

const CartList = ({ cartClick, handleCartClick }) => {
  const { items } = useContext(CartContext);
  const cartNotEmpty = Array.isArray(items) && items.length !== 0;

  // const cartProductsRef = useRef(null);

  // useEffect(() => {
  //   adjustCartProductsHeight();
  //   window.addEventListener('resize', adjustCartProductsHeight);
  //   return () => {
  //     window.removeEventListener('resize', adjustCartProductsHeight);
  //   };
  // }, []);

  // const adjustCartProductsHeight = () => {
  //   if (cartProductsRef.current) {
  //     const itemHeight = 100; // Adjust this value to match your item's height
  //     const maxHeight = window.innerHeight - 200; // Adjust the 300 value to leave space for other elements
  //     const numItems = items.length;
  //     const calculatedHeight = Math.min(numItems * itemHeight, maxHeight);
  //     cartProductsRef.current.style.maxHeight = `${calculatedHeight}px`;
  //   }
  // };

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

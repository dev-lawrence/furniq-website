const Cart = ({ cartClick, handleCartClick }) => {
  return (
    <>
      <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
        <div className="cart">
          <div className="d-flex title">
            <div className="close" onClick={handleCartClick}>
              <a href="#">Back to store 🏃‍♂️</a>
            </div>
          </div>

          <div className="content">
            <div>
              <h3>Your cart is empty</h3>
              <a className="cart-btn" onClick={handleCartClick} href="#">
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

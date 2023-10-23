import { useState, useContext, useEffect } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CartContext from '../CartContext';
import NotificationContext from '../NotificationContext';

const CartItem = ({ product }) => {
  const { _id, image, name, price } = product;
  const { products, addToCart, removeFromCart, reduceCartQuantity } =
    useContext(CartContext);
  const { showNotify } = useContext(NotificationContext);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartItem = products.find((product) => product._id === _id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [products, _id]);

  // Function to Increase Quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart(_id, image, name, price);
  };

  // Function to Reduce Quantity
  const reduceQuantity = () => {
    if (quantity > 1) {
      reduceCartQuantity(_id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      removeFromCart(_id);
    }
  };

  // calculate the price
  const calculatePrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <>
      <div className="cart-products-product">
        <img src={image} alt={name} />
        <div className="cart-product-details">
          <h5 className="name">{name}</h5>
          <h4 className="price">${calculatePrice(quantity, price)}</h4>
          <div className="buttons">
            <button
              onClick={() => {
                reduceQuantity();
                showNotify;
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div onClick={() => removeFromCart(_id)}>
            <DeleteRoundedIcon className="delete" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

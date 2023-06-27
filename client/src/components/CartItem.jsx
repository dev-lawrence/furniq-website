import { useState, useContext, useEffect } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CartContext from '../CartContext';
import { motion } from 'framer-motion';

const CartItem = ({ item }) => {
  const { id, img, alt, title, price } = item;
  const { removeFromCart, reduceCartQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);
  const [isVisible, setIsVisible] = useState(true);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      reduceCartQuantity(id);
    } else {
      handleRemove();
    }
  };

  const calculatePrice = (quantity, price) => {
    return quantity * price;
  };

  // animate out the item when it is deleted
  const removeCartItem = () => {
    setIsVisible(false);
    setTimeout(() => {
      removeFromCart(id);
    }, 500);
  };

  useEffect(() => {
    setQuantity(item.quantity);
    setIsVisible(true);
  }, [item]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="cart-products-product"
    >
      <img src={img} alt={alt} />
      <div className="cart-product-details">
        <h5 className="name">{title}</h5>
        <h4 className="price">${calculatePrice(quantity, price)}</h4>
        <div className="buttons">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            +
          </button>
        </div>
        <div onClick={removeCartItem}>
          <DeleteRoundedIcon className="delete" />
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;

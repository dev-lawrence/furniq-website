import { createContext } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('furniq-cart', []);

  // add to cart
  const addToCart = (id, img, alt, title, price) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      setItems(updatedItems);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { id, img, alt, title, price, quantity: 1 },
      ]);
    }
  };

  // remove item from cart
  const removeFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // reduce the cart items
  const reduceCartQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity < 1) {
          removeFromCart(id);
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, reduceCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

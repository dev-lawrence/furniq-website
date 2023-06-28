import { createContext, useContext } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import NotificationContext from './NotificationContext';
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('furniq-cart', []);
  const { showNotify } = useContext(NotificationContext);

  // add to cart
  const addToCart = (id, img, alt, title, price) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          showNotify(`Increased ${title} quantity`);
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

      showNotify(`${title} added to your cart`);
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
        showNotify(`Reduced ${item.title} item quantity`);
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

  // reset cart to zero on success page
  const resetCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        reduceCartQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

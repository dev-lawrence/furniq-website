// REAL CODE
import { useContext, useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import CartContext from '../CartContext';
import CartItem from './CartItem';
import PayButton from './PayButton';
import { motion } from 'framer-motion';

const CartList = ({ cartClick, handleCartClose }) => {
  const { items } = useContext(CartContext);
  const cartNotEmpty = Array.isArray(items) && items.length !== 0;
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    if (cartClick) {
      const timeout = setTimeout(() => {
        setShowItems(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setShowItems(false);
    }
  }, [cartClick]);

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
          <button className="close" onClick={handleCartClose}>
            <span>Back to store 🏃‍♂️</span>
          </button>

          <div className="content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showItems ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="cart-products"
            >
              {cartNotEmpty ? (
                items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: showItems ? 1 : 0,
                      y: showItems ? 0 : 20,
                    }}
                    transition={{
                      type: 'tween',
                      duration: 0.3,
                      delay: index * 0.3,
                    }}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))
              ) : (
                <EmptyCart handleCartClick={handleCartClose} />
              )}
            </motion.div>
          </div>

          {cartNotEmpty && (
            <div className="subtotal-container">
              <div className="subtotal">
                <span>Subtotal: ${calculateSubTotal()}</span>
              </div>

              <PayButton items={items} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;

// TEST ANIMATION
// import { useContext, useState, useEffect } from 'react';
// import EmptyCart from './EmptyCart';
// import CartContext from '../CartContext';
// import CartItem from './CartItem';
// import PayButton from './PayButton';
// import { motion } from 'framer-motion';

// const CartList = ({ cartClick, handleCartClose }) => {
//   const { items } = useContext(CartContext);
//   const cartNotEmpty = Array.isArray(items) && items.length !== 0;
//   const [showItems, setShowItems] = useState(false);

//   useEffect(() => {
//     if (cartClick) {
//       const timeout = setTimeout(() => {
//         setShowItems(true);
//       }, 500);
//       return () => clearTimeout(timeout);
//     } else {
//       setShowItems(false);
//     }
//   }, [cartClick]);

//   const calculateSubTotal = () => {
//     let subtotal = 0;
//     items.forEach((item) => {
//       subtotal += item.quantity * item.price;
//     });
//     return subtotal.toFixed(2);
//   };

//   return (
//     <>
//       <div className={`cart-container ${cartClick ? 'showCart' : ''}`}>
//         <div className="cart">
//           <button className="close" onClick={handleCartClose}>
//             <span>Back to store 🏃‍♂️</span>
//           </button>

//           <div className="content">
//             <motion.div
//               className="cart-products"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: showItems ? 1 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {cartNotEmpty ? (
//                 items.map((item, index) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{
//                       opacity: showItems ? 1 : 0,
//                       y: showItems ? 0 : 20,
//                     }}
//                     transition={{
//                       type: 'tween',
//                       duration: 0.3,
//                       delay: index * 0.3,
//                     }}
//                   >
//                     <CartItem item={item} />
//                   </motion.div>
//                 ))
//               ) : (
//                 <EmptyCart handleCartClick={handleCartClose} />
//               )}
//             </motion.div>
//           </div>

//           {cartNotEmpty && (
//             <div className="subtotal-container">
//               <div className="subtotal">
//                 <span>Subtotal: ${calculateSubTotal()}</span>
//               </div>
//               <PayButton items={items} />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartList;

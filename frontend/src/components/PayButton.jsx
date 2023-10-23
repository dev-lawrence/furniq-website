import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Spinner } from './Spinner';
const { VITE_STRIPE_PUBLISHABLE_KEY } = import.meta.env;
const stripePromise = loadStripe(VITE_STRIPE_PUBLISHABLE_KEY);

const PayButton = ({ products }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    try {
      setIsProcessing(true);
      const stripe = await stripePromise;
      const session = await fetch(
        '/.netlify/functions/create-checkout-session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ lineItems }),
        }
      ).then((response) => response.json());

      // Redirect to Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button className="cta" onClick={handleCheckout} disabled={isProcessing}>
        {isProcessing ? <Spinner /> : 'Checkout'}
      </button>
    </>
  );
};

export default PayButton;

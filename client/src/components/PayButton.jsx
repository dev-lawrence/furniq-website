import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { Spinner } from './Spinner';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;

const stripePromise = loadStripe(
  'pk_test_51NLk1DA0G44xrEVcpuH1P2RzDgdnMC85Yo6pxG9gtvMdiHbtbyKjQn34f8j4TvYxux5QIedeOAS2kh0iBxonX7Qq00polShwlz'
);

axios.defaults.headers.common['Authorization'] = 'Bearer ' + VITE_API_TOKEN;
const PayButton = ({ items }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // const handleCheckout = async () => {
  //   try {
  //     setIsProcessing(true);
  //     const stripe = await stripePromise;

  //     const response = await axios.post(
  //       VITE_API_URL + '/orders',
  //       {
  //         items,
  //       },
  //       {
  //         headers: {
  //           Authorization: 'Bearer ' + STRIPE_SECRET_KEY,
  //         },
  //       }
  //     );

  //     await stripe.redirectToCheckout({
  //       sessionId: response.data.stripeSession.id,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      const stripe = await stripePromise;

      const response = await axios.post(VITE_API_URL + '/orders', {
        items,
      });

      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <button
        className="cta"
        onClick={() => handleCheckout()}
        disabled={isProcessing}
      >
        {isProcessing ? <Spinner /> : 'Checkout'}
      </button>
    </>
  );
};

export default PayButton;

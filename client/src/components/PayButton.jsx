import axios from 'axios';
// const url = 'http://localhost:3000';
import { loadStripe } from '@stripe/stripe-js';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;

const stripePromise = loadStripe(
  'pk_test_51NLk1DA0G44xrEVcpuH1P2RzDgdnMC85Yo6pxG9gtvMdiHbtbyKjQn34f8j4TvYxux5QIedeOAS2kh0iBxonX7Qq00polShwlz'
);

axios.defaults.headers.common['Authorization'] = 'Bearer ' + VITE_API_TOKEN;
const PayButton = ({ items }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const response = await axios.post(VITE_API_URL + '/orders', {
        items,
      });

      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const handleCheckout = () => {
  //   axios
  //     .post(`${url}/stripe/create-checkout-session`, {
  //       items,
  //     })
  //     .then((response) => {
  //       if (response.data.url) {
  //         window.location.href = response.data.url;
  //       }
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  return (
    <>
      <button className="cta" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </>
  );
};

export default PayButton;

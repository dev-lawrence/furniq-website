import axios from 'axios';
const url = 'http://localhost:3000';

const PayButton = ({ items }) => {
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        items,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button className="cta" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </>
  );
};

export default PayButton;

const PayButton = ({ amount, items }) => {
  const handleCheckout = () => {
    console.log(items);
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

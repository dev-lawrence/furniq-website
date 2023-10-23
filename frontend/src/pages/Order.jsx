import useFetchData from '../hooks/useFetchData';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;

const Order = () => {
  const { data, loading, error } = useFetchData(
    VITE_API_URL + '/orders',
    VITE_API_TOKEN
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {error.message}</p>;
  }

  console.log(data);

  return (
    <div className="orders">
      <div className="orders-container">
        {data && data.length > 0 ? (
          data.map((order) => (
            <div className="order" key={order.id}>
              <p className="id">
                Order reference: {order.attributes.sessionId}
              </p>
              <span>Time: {order.attributes.updatedAt}</span>

              {order.attributes.items.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.img} alt="" />
                  <div className="items-details">
                    <h4 className="name">{item.title}</h4>
                    <h4 className="price">${item.price}.00</h4>
                    <span className="quantity">Quantity: {item.quantity}</span>
                  </div>
                </div>
              ))}

              <span>Total: ${order.attributes.totalPrice}</span>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;

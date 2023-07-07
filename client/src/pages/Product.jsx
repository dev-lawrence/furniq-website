import { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Trending from '../components/Trending';
import Review from '../components/Review';
import BreadCrumbs from '../components/BreadCrumbs';
const LOCAL_STORAGE_KEY = 'reviews.furniqReviews';
import CartContext from '../CartContext';
import NotificationContext from '../NotificationContext';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
const { VITE_UPLOAD_URL } = import.meta.env;
import useFetchData from '../hooks/useFetchData';
import { Loading } from '../components/Loading';

const Product = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchData(
    VITE_API_URL + `/products/${id}?populate=*`,
    VITE_API_TOKEN
  );

  const imageUrl = `${VITE_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`;
  const [image, setImage] = useState(0);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedReviews ? JSON.parse(storedReviews) : [];
  });
  const {
    items: cartItems,
    addToCart,
    removeFromCart,
    reduceCartQuantity,
  } = useContext(CartContext);
  const { showNotify } = useContext(NotificationContext);

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === data?.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItems, data?.id]);

  // Function to Increase Quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart(
      data?.id,
      imageUrl,
      data?.attributes?.alt,
      data?.attributes?.title,
      data?.attributes?.price
    );
  };

  // Function to Reduce Quantity
  const reduceQuantity = () => {
    if (quantity > 1) {
      reduceCartQuantity(data?.id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      removeFromCart(data?.id);
    }
  };

  // Get the URL of the currently selected image
  const getImageUrl = () => {
    const selectedImage = data?.attributes?.relatedImgs?.data?.[image];
    return selectedImage
      ? `${VITE_UPLOAD_URL}${selectedImage?.attributes?.url}`
      : '';
  };

  return (
    <>
      <section className="product-page">
        {loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="container">
            <BreadCrumbs id={id} />
            <hr className="breadcrumbs-line" />
            <div className="d-grid">
              <div className="images">
                <div className="main-img">
                  <img src={getImageUrl()} alt={data?.attributes?.alt} />
                </div>
                <div className="small-imgs">
                  {data?.attributes?.relatedImgs?.data.map((img, index) => {
                    const otherImgs = `${VITE_UPLOAD_URL}${img?.attributes?.url}`;
                    return (
                      <img
                        onClick={() => setImage(index)}
                        key={index}
                        src={otherImgs}
                        alt={data?.attributes?.alt}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="details">
                <h3 className="mb-50">{data?.attributes?.title}</h3>
                <p className="mb-100 description">
                  {data?.attributes?.description}
                </p>
                <div className="delivery"></div>
                <div className="price mb-100">
                  ${data?.attributes?.price}.00
                </div>
                <div className="flex">
                  <div className="mb-200 d-flex">
                    <p className="text-bold">Quantity </p>
                    <div className="buttons">
                      <button onClick={reduceQuantity}>-</button>
                      <span>{quantity}</span>
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                  </div>
                </div>

                <div className="buy-btn">
                  <div className="d-flex">
                    <Link
                      onClick={() => {
                        addToCart(
                          data.id,
                          imageUrl,
                          data?.attributes?.alt,
                          data?.attributes?.title,
                          data?.attributes?.price
                        );
                        showNotify;
                      }}
                    >
                      <button className="btn">add to cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr className="line" />

            <div className="other-information">
              <div className="info">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`${activeTab === 'description' ? 'active' : ''}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('add-info')}
                  className={`${activeTab === 'add-info' ? 'active' : ''}`}
                >
                  Additional Information
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`${activeTab === 'reviews' ? 'active' : ''}`}
                >
                  Reviews({reviews.length})
                </button>
              </div>

              {/* Description */}
              {activeTab === 'description' && (
                <div className="description">
                  <div className="content">
                    <h3 className="mb-100">{data?.attributes?.title}</h3>
                    <p>
                      A a at habitasse inceptos a quisque nibh ut arcu et dictum
                      laoreet elit ante scelerisque libero consectetur erat non
                      a suspendisse ad phasellus phasellus suspendisse gravida
                      eu. Dapibus congue libero sem at dis a a adipiscing
                      parturient eros diam parturient sodales consectetur quis.
                    </p>
                    <p>
                      A a at habitasse inceptos a quisque nibh ut arcu et dictum
                      laoreet elit ante scelerisque libero consectetur erat non
                      a suspendisse ad phasellus phasellus suspendisse gravida
                      eu. Dapibus congue libero sem at dis a a adipiscing
                      parturient eros diam parturient sodales consectetur quis.
                    </p>
                  </div>

                  <img src={imageUrl} alt="" />
                </div>
              )}

              {/* Additional Information */}
              {activeTab === 'add-info' && (
                <div className="add-info">
                  <table>
                    <tbody>
                      <tr>
                        <th>Brand</th>
                        <td>Magisso</td>
                      </tr>
                      <tr>
                        <th>Height</th>
                        <td>74 cm</td>
                      </tr>
                      <tr>
                        <th>Width</th>
                        <td>105 cm</td>
                      </tr>
                      <tr>
                        <th>Depth</th>
                        <td>45 cm</td>
                      </tr>
                      <tr>
                        <th>Material</th>
                        <td>Solid oak</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Review */}
              {activeTab === 'reviews' && (
                <Review
                  reviews={reviews}
                  setReviews={setReviews}
                  LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY}
                />
              )}
            </div>

            <Trending title="Related Products" showNotify={showNotify} />
          </div>
        )}
      </section>
    </>
  );
};

export default Product;

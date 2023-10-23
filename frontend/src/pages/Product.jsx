import { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Trending from '../components/Trending';
import Review from '../components/Review';
import BreadCrumbs from '../components/BreadCrumbs';
const LOCAL_STORAGE_KEY = 'reviews.furniqReviews';
import CartContext from '../CartContext';
import NotificationContext from '../NotificationContext';
import { Loading } from '../components/Loading';
import { fetchData } from '../libs/client';
import { useQuery } from '@tanstack/react-query';

const Product = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [image, setImage] = useState(0);
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedReviews ? JSON.parse(storedReviews) : [];
  });
  const {
    products: cartItems,
    addToCart,
    removeFromCart,
    reduceCartQuantity,
  } = useContext(CartContext);
  const { showNotify } = useContext(NotificationContext);

  // Use useQuery to fetch and cache product data
  const {
    data: product,
    isLoading: loading,
    isError: error,
  } = useQuery(['product', id], async () => {
    const data = await fetchData();
    return data.find((product) => product._id === id);
  });

  useEffect(() => {
    const cartItem = cartItems.find((item) => item._id === product?.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItems, product?.id]);

  // Function to Increase Quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart(product._id, product.image, product.name, product.price);
  };

  // Function to Reduce Quantity
  const reduceQuantity = () => {
    if (quantity > 1) {
      reduceCartQuantity(product?.id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      removeFromCart(product?.id);
    }
  };

  const getImageUrl = () => {
    const selectedImage = product.thumbnailImgs[image];
    return selectedImage;
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
                  <img src={getImageUrl()} alt={product.name} />
                </div>
                <div className="small-imgs">
                  {product.thumbnailImgs.map((img, index) => {
                    return (
                      <img
                        onClick={() => setImage(index)}
                        key={index}
                        src={img}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="details">
                <h3 className="mb-50">{product.name}</h3>
                <p className="mb-100 description">{product.description}</p>
                <div className="delivery"></div>
                <div className="price mb-100">${product.price}</div>
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
                          product._id,
                          product.image,
                          product.name,
                          product.price
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
                    <h3 className="mb-100">{product.title}</h3>
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

                  <img src={product.image} alt="" />
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

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from '../data/AllProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Trending from '../components/Trending';
import Review from '../components/Review';
import BreadCrumbs from '../components/BreadCrumbs';
const LOCAL_STORAGE_KEY = 'reviews.furniqReviews';

const Product = () => {
  const { name } = useParams();
  const product = items.filter((item) => item.id === parseInt(name));
  const { img, alt, title, price, description, relatedImgs } = product[0];
  const [image, setImage] = useState(img);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  // Change Image
  const changeImage = (event) => {
    setImage(event.target.src);
  };

  // Function to Increase Quantity
  const increaseQuantity = () => {
    quantity >= 1 && setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to Reduce Quantity
  const reduceQuantity = () => {
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <>
      <Header />

      <section className="product-page">
        <div className="container">
          <BreadCrumbs name={name} />
          <hr className="breadcrumbs-line" />
          <div className="d-grid">
            <div className="images">
              <div className="main-img">
                <img src={image} alt={alt} />
              </div>
              <div className="small-imgs">
                {relatedImgs.map((img, index) => (
                  <img onClick={changeImage} key={index} src={img} />
                ))}
              </div>
            </div>

            <div className="details">
              <h3 className="mb-50">{title}</h3>
              <p className="mb-100 description">{description}</p>
              <div className="delivery"></div>
              <div className="price mb-100">${price}.00</div>
              <div className="flex">
                <div className="mb-200 d-flex">
                  <p className="text-bold">Quantity:</p>
                  <div className="buttons">
                    <button onClick={reduceQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                </div>
              </div>

              <div className="quantity">
                <div className="d-flex">
                  <Link to={'#'}>
                    <button className="btn-outline">add to cart</button>
                  </Link>

                  <Link to={'#'}>
                    <button className="btn">buy now</button>
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
                  <h3 className="mb-100">{title}</h3>
                  <p>
                    A a at habitasse inceptos a quisque nibh ut arcu et dictum
                    laoreet elit ante scelerisque libero consectetur erat non a
                    suspendisse ad phasellus phasellus suspendisse gravida eu.
                    Dapibus congue libero sem at dis a a adipiscing parturient
                    eros diam parturient sodales consectetur quis.
                  </p>
                  <p>
                    A a at habitasse inceptos a quisque nibh ut arcu et dictum
                    laoreet elit ante scelerisque libero consectetur erat non a
                    suspendisse ad phasellus phasellus suspendisse gravida eu.
                    Dapibus congue libero sem at dis a a adipiscing parturient
                    eros diam parturient sodales consectetur quis.
                  </p>
                </div>

                <img src={image} alt="" />
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

          <Trending title="Related Products" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;

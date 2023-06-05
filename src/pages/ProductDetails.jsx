import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from '../data/AllProductsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ProductDetails = () => {
  const { name } = useParams();
  const product = items.filter((item) => item.id === parseInt(name));
  const { img, alt, title, price, description, relatedImgs } = product[0];
  const [image, setImage] = useState(img);
  const [quantity, setQuantity] = useState(1);

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
      <section className="product-details">
        <div className="container">
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
              <div className="d-flex mb-100">
                <p className="text-bold mb-50">Colors:</p>
                <div className="colors">
                  <div className="color purple"></div>
                  <div className="color green"></div>
                  <div className="color orange"></div>
                </div>
              </div>

              <div className="quantity">
                <p className="text-bold mb-50">Quantity:</p>
                <div className="d-flex">
                  <div className="buttons">
                    <button onClick={reduceQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                  </div>

                  <Link to={'#'}>
                    <button className="btn">add to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;

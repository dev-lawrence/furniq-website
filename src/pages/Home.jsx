import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FaShoppingCart } from 'react-icons/fa';
import FeaturedImg1 from '../assets/img/furni1.webp';
import FeaturedImg2 from '../assets/img/furni2.webp';
import FeaturedImg3 from '../assets/img/furni3.webp';
import FeaturedImg4 from '../assets/img/furni4.webp';
import FeaturedImg5 from '../assets/img/furni5.webp';
import FeaturedImg6 from '../assets/img/furni6.webp';
import BannerImg from '../assets/img/hero-bg4.webp';

const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <div className="hero">
          {/* // Not in use at the moment */}
          {/* <div className="overlay"></div> */}
          <div className="container">
            <div className="content">
              <h1>Discover the Perfect Furniture Pieces for Your Home</h1>
              <p>
                Experience Quality Craftsmanship and Timeless Designs for Every
                Room in Your Home.
              </p>
              <Link className="btn cta" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          {/* Featured Products */}
          <section className="featured-product pt-section">
            <div className="title">
              <h2>Featured Products</h2>
              <p>Elevate Your Home with our Handpicked Favorites.</p>
            </div>

            {/* product 1 */}
            <div className="products">
              <div className="product">
                <img src={FeaturedImg1} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>

              {/* product 2 */}
              <div className="product">
                <img src={FeaturedImg2} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>

              {/* product 3 */}
              <div className="product">
                <img src={FeaturedImg3} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>

              {/* product 4 */}
              <div className="product">
                <img src={FeaturedImg4} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>

              {/* product 5 */}
              <div className="product">
                <img src={FeaturedImg5} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>

              {/* product 6 */}
              <div className="product">
                <img src={FeaturedImg6} alt="chair" />

                <div className="description">
                  <div className="description-content">
                    <h5 className="name">Little Armchair Sheepskin</h5>
                    <h4 className="price">$74</h4>
                  </div>

                  <a className="cart" href="#">
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Banner section */}
          <section className="banner pt-section">
            <div className="banner-container">
              <div className="content">
                <div className="text">
                  <h2>Creative harmonious living</h2>
                  <p>
                    Furniq Products are all made to standard sizes so that you
                    can mix and match them freely.
                  </p>
                  <Link className="btn cta" to="/">
                    Shop Now
                  </Link>
                </div>

                <div className="img">
                  <img src={BannerImg} alt="sofa" />
                </div>
              </div>
            </div>
          </section>

          <div className="pt-section"></div>
        </div>
      </section>
    </>
  );
};

export default Home;

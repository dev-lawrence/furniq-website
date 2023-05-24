import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerImg from '../assets/img/hero-bg4.webp';
import Service1 from '../assets/img/services1.svg';
import Service2 from '../assets/img/services2.svg';
import Service3 from '../assets/img/services3.svg';
import Service4 from '../assets/img/services4.svg';
import FeaturedProducts from '../components/FeaturedProducts';

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
          {/* Services */}
          <div className="services pt-section">
            <div className="services-container">
              <div className="services-content">
                {/* Service card */}
                <div className="service">
                  <img src={Service1} alt="Fast & Free Delivery" />
                  <h3>Fast & Free Delivery</h3>
                </div>

                {/* Service card */}
                <div className="service">
                  <img src={Service2} alt="Secure Payment" />
                  <h3>Secure Payment</h3>
                </div>

                {/* Service card */}
                <div className="service">
                  <img src={Service3} alt="Money Back Guarantee" />
                  <h3>Money Back Guarantee</h3>
                </div>

                {/* Service card */}
                <div className="service">
                  <img src={Service4} alt="online support" />
                  <h3>Online Support</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <FeaturedProducts />
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
      <Footer />
    </>
  );
};

export default Home;

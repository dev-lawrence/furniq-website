import Header from '../components/Header';
import Footer from '../components/Footer';
import mainImg from '../assets/img/table1.webp';
import smallImg1 from '../assets/img/table2.webp';
import smallImg2 from '../assets/img/table4.webp';
import smallImg3 from '../assets/img/table5.webp';

const ProductDetails = () => {
  return (
    <>
      <Header />
      <section className="product-details">
        <div className="container">
          <div className="d-grid">
            <div className="images">
              <div className="main-img">
                <img src={mainImg} alt="" />
              </div>
              <div className="small-imgs">
                <img src={smallImg1} alt="" />
                <img src={smallImg2} alt="" />
                <img src={smallImg3} alt="" />
              </div>
            </div>

            <div className="details">
              <h3 className="mb-50">Pocket cotton sweatshirt</h3>
              <p className="mb-100">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut...
              </p>
              <div className="delivery"></div>
              <div className="price mb-100">$495.00</div>
              <div className="d-flex mb-100">
                <p className="text-bold mb-50">Colors:</p>
                <div className="colors">
                  <div className="color purple"></div>
                  <div className="color green"></div>
                  <div className="color orange"></div>
                </div>
              </div>

              <div className="quantity">
                <div className="d-flex">
                  <p className="text-bold mb-50">Quantity:</p>

                  <div className="buttons">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </div>
                </div>

                <button className="btn">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

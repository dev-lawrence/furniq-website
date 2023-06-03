import { Link } from 'react-router-dom';
import TableImg from '../assets/img/table7.webp';
import ChairImg from '../assets/img/chair1.webp';
import BedImg from '../assets/img/bed1.webp';
import CouchImg from '../assets/img/couch1.webp';

const Category = () => {
  return (
    <>
      <section className="category pt-section">
        <div className="category-grid">
          <div className="grid-one">
            <Link to="#" className="category-content">
              <div className="overlay"></div>
              <img src={TableImg} alt="" />
              <p className="description">Tables</p>
            </Link>
          </div>

          <div className="grid-two">
            <Link to="#" className="category-content">
              <div className="overlay"></div>
              <img src={ChairImg} alt="" />
              <p className="description">Chairs</p>
            </Link>
          </div>

          <div className="grid-three">
            <Link to="#" className="category-content">
              <div className="overlay"></div>
              <img src={BedImg} alt="" />
              <p className="description">Bed</p>
            </Link>
          </div>

          <div className="grid-four">
            <Link to="#" className="category-content">
              <div className="overlay"></div>
              <img src={CouchImg} alt="" />
              <p className="description">Couch</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

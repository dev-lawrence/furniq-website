import { Link } from 'react-router-dom';
import TableImg from '../assets/img/table8.webp';
import ChairImg from '../assets/img/chair8.webp';
import BedImg from '../assets/img/bed10.webp';
import CouchImg from '../assets/img/couch8.webp';
import useFetchData from '../hooks/useFetchData';

const Category = () => {
  const { data: products } = useFetchData();

  const tableQuantity = products?.filter(
    (product) => product.category === 'chair'
  ).length;
  const chairQuantity = products?.filter(
    (product) => product.category === 'chair'
  ).length;
  const bedQuantity = products?.filter(
    (product) => product.category === 'bed'
  ).length;
  const couchQuantity = products?.filter(
    (product) => product.category === 'couch'
  ).length;

  return (
    <>
      <section className="category pt-section">
        <div className="category-grid">
          <div className="grid-one mb">
            <Link
              to="/category/tables"
              className="category-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="overlay"></div>
              <img loading="lazy" src={TableImg} alt="table" />
              <span className="quantity">{tableQuantity} products</span>
              <p className="description">Tables</p>
            </Link>
          </div>

          <div className="grid-two mb">
            <Link
              to="category/chairs"
              className="category-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="overlay"></div>
              <img loading="lazy" src={ChairImg} alt="chair" />
              <span className="quantity">{chairQuantity} products</span>
              <p className="description">Chairs</p>
            </Link>
          </div>

          <div className="grid-three mb">
            <Link
              to="category/beds"
              className="category-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="overlay"></div>
              <img loading="lazy" src={BedImg} alt="bed" />
              <span className="quantity">{bedQuantity} products</span>
              <p className="description">Beds</p>
            </Link>
          </div>

          <div className="grid-four">
            <Link
              to="category/couches"
              className="category-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="overlay"></div>
              <img loading="lazy" src={CouchImg} alt="couch" />
              <span className="quantity">{couchQuantity} products</span>
              <p className="description">Couches</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

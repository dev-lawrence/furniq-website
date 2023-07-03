import { Link } from 'react-router-dom';
import TableImg from '../assets/img/table8.webp';
import ChairImg from '../assets/img/chair8.webp';
import BedImg from '../assets/img/bed10.webp';
import CouchImg from '../assets/img/couch8.webp';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
import useFetchData from '../hooks/useFetchData';

const Category = () => {
  const { data: items } = useFetchData(
    VITE_API_URL + '/products?populate=*',
    VITE_API_TOKEN
  );

  const tableQuantity = items?.filter(
    (item) => item?.attributes?.category === 'chair'
  ).length;
  const chairQuantity = items?.filter(
    (item) => item?.attributes?.category === 'chair'
  ).length;
  const bedQuantity = items?.filter(
    (item) => item?.attributes?.category === 'bed'
  ).length;
  const couchQuantity = items?.filter(
    (item) => item?.attributes?.category === 'couch'
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

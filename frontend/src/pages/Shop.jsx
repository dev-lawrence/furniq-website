import { useContext, useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import NotificationContext from '../NotificationContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShopCategory from '../components/ShopCategory';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import Noproduct from '../assets/img/Empty-pana.svg';
import useFetchData from '../hooks/useFetchData';
import { Loading } from '../components/Loading';
import PageBreadCrumbs from '../components/PageBreadCrumbs';

const Shop = () => {
  const { data: products } = useFetchData();

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');

  const [sortOption, setSortOption] = useState('Sort by latest');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const { showNotify } = useContext(NotificationContext);

  if (!Array.isArray(products)) {
    return (
      <>
        <section className="shop">
          <Hero text="Shop" />
          <Loading />
        </section>
      </>
    );
  }

  let sortedData = [...products];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  if (sortOption === 'hightolow') {
    sortedData.sort((a, b) => b.price - a.price);
  }

  if (sortOption === 'lowtohigh') {
    sortedData.sort((a, b) => a.price - b.price);
  }

  if (sortOption === 'sortbynewest') {
    sortedData = sortedData.filter((product) => product.isNew === true);
  }

  const filteredProducts = searchQuery
    ? sortedData.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedProduct === 'all'
    ? sortedData
    : sortedData.filter((product) => product.category === selectedProduct);

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
    setCurrentPage(1);
    searchParams.delete('query');
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  // Logic for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // get total length of search results
  const totalLength = filteredProducts.length;

  return (
    <>
      <section className="shop">
        <Hero text="Shop" />
        <div className="container pt-section">
          <PageBreadCrumbs />
          {searchQuery && (
            <p className="searched-product">
              {totalLength} search results for <strong>"{searchQuery}"</strong>
            </p>
          )}
          <div className="heading-flex">
            <div className="title">
              <h2>All products</h2>
            </div>

            <div className="shop-select">
              <select
                name="sort"
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="sortbylatest">Sort by latest</option>
                <option value="hightolow">Sort by price: High to Low</option>
                <option value="lowtohigh">Sort by price: Low to High</option>
                <option value="sortbynewest">Sort by newest</option>
              </select>
              <ExpandMoreIcon className="arrow" />
            </div>
          </div>
          <div className="shop-container">
            <div className="shop-flex">
              <ShopCategory
                selectedProduct={selectedProduct}
                handleFilterChange={handleFilterChange}
              />
              {currentProducts.length === 0 ? (
                <div className="no-img">
                  <img src={Noproduct} alt="" />
                </div>
              ) : (
                <div className="products">
                  {currentProducts.map((product) => {
                    return (
                      <Card
                        product={product}
                        key={product._id}
                        showNotify={showNotify}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

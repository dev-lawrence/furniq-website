import { useContext, useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import NotificationContext from '../NotificationContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShopCategory from '../components/ShopCategory';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import NoItem from '../assets/img/Empty-pana.svg';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
import useFetchData from '../hooks/useFetchData';
import { Loading } from '../components/Loading';
import PageBreadCrumbs from '../components/PageBreadCrumbs';

const Shop = () => {
  const { data } = useFetchData(
    VITE_API_URL + '/products?populate=*',
    VITE_API_TOKEN
  );
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');

  const [sortOption, setSortOption] = useState('Sort by latest');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const { showNotify } = useContext(NotificationContext);

  if (!Array.isArray(data)) {
    return (
      <>
        <section className="shop">
          <Hero text="Shop" />
          <Loading />
        </section>
      </>
    );
  }

  let sortedData = [...data];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  if (sortOption === 'hightolow') {
    sortedData.sort((a, b) => b.attributes?.price - a.attributes?.price);
  }

  if (sortOption === 'lowtohigh') {
    sortedData.sort((a, b) => a.attributes?.price - b.attributes?.price);
  }

  if (sortOption === 'sortbynewest') {
    sortedData = sortedData.filter((item) => item?.attributes?.isNew === true);
  }

  const filteredItems = searchQuery
    ? sortedData.filter((item) =>
        item?.attributes?.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : selectedProduct === 'all'
    ? sortedData
    : sortedData.filter(
        (item) => item?.attributes?.category === selectedProduct
      );

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
    setCurrentPage(1); // Reset current page when filter option changes
    searchParams.delete('query');
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // get total length of search results
  const totalLength = filteredItems.length;

  return (
    <>
      <section className="shop">
        <Hero text="Shop" />
        <div className="container pt-section">
          {/* <BreadCrumbs /> */}
          <PageBreadCrumbs />
          {searchQuery && (
            <p className="searched-item">
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
              {currentItems.length === 0 ? (
                <div className="no-img">
                  <img src={NoItem} alt="" />
                </div>
              ) : (
                <div className="products">
                  {currentItems.map((item) => {
                    return (
                      <Card item={item} key={item.id} showNotify={showNotify} />
                    );
                  })}
                </div>
              )}
            </div>

            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItems.length}
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

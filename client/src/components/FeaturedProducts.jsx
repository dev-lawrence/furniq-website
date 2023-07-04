import { useState } from 'react';
import Card from './Card';
import FilterProducts from './FilterProducts';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
import useFetchData from '../hooks/useFetchData';
import { Loading } from './Loading';

const FeaturedProducts = ({ showNotify }) => {
  const {
    data: items,
    loading,
    error,
  } = useFetchData(VITE_API_URL + '/products?populate=*', VITE_API_TOKEN);

  const [selectedProduct, setSelectedProduct] = useState('all');

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
  };

  const filteredItems =
    selectedProduct === 'all'
      ? items || []
      : (items || []).filter((item) => {
          return item?.attributes?.category === selectedProduct;
        });

  return (
    <>
      <section className="featured-product pt-section">
        <div className="title">
          <h2>Featured Products</h2>
          <p>Elevate Your Home with our Handpicked Favorites.</p>
        </div>

        <FilterProducts
          handleFilterChange={handleFilterChange}
          selectedProduct={selectedProduct}
        />

        <div className="products">
          {loading ? (
            <Loading />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            filteredItems.map((item) => {
              return (
                <Card item={item} key={item?.id} showNotify={showNotify} />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

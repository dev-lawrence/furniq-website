import { useState } from 'react';
import Card from './Card';
import FilterProducts from './FilterProducts';
import { Loading } from './Loading';
import useFetchData from '../hooks/useFetchData';

const FeaturedProducts = ({ showNotify }) => {
  const { data: products, loading, error } = useFetchData();
  const [selectedProduct, setSelectedProduct] = useState('all');

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
  };

  const filteredItems =
    selectedProduct === 'all'
      ? products || []
      : (products || []).filter((product) => {
          return product?.category === selectedProduct;
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
            <p>Error: {error}</p>
          ) : (
            filteredItems.map((product) => {
              return (
                <Card
                  product={product}
                  key={product._id}
                  showNotify={showNotify}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

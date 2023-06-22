import { useState } from 'react';
import { items } from '../data/AllProductsData';
import Card from './Card';
import FilterProducts from './FilterProducts';

const FeaturedProducts = ({ showNotify }) => {
  const [selectedProduct, setSelectedProduct] = useState('all');

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
  };

  const filteredItems =
    selectedProduct === 'all'
      ? items.filter((item) => item.id <= 9)
      : items.filter((item) => item.category === selectedProduct);

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
          {filteredItems.map((item) => {
            return <Card item={item} key={item.id} showNotify={showNotify} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

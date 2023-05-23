import { FeaturedProductsData } from '../data/FeaturedProductsData';
import Card from './Card';

const FeaturedProducts = () => {
  return (
    <>
      <section className="featured-product pt-section">
        <div className="title">
          <h2>Featured Products</h2>
          <p>Elevate Your Home with our Handpicked Favorites.</p>
        </div>

        <div className="products">
          {FeaturedProductsData.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

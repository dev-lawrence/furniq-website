import { useContext } from 'react';
import Hero from '../components/Hero';
import { items } from '../data/AllProductsData';
import Card from '../components/Card';
import NotificationContext from '../NotificationContext';

const Shop = () => {
  const filteredItems = items.filter((item) => item.id >= 12);
  const { showNotify } = useContext(NotificationContext);

  return (
    <>
      <section className="shop">
        <Hero text="Shop" />
        <div className="container pt-section">
          <div className="flex">
            <div className="title">
              <h2>All products</h2>
            </div>

            <select name="" id="">
              <option value="">Default</option>
              <option value="">Sort by price</option>
              <option value="">Default</option>
              <option value="">Default</option>
            </select>
          </div>

          <div className="products">
            {filteredItems.map((item) => {
              return <Card item={item} key={item.id} showNotify={showNotify} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

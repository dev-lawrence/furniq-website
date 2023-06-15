import { useContext } from 'react';
import { items } from '../data/AllProductsData';
import NotificationContext from '../NotificationContext';
import Card from './Card';
import Hero from './Hero';

const CouchItem = () => {
  const { showNotify } = useContext(NotificationContext);

  const filteredItems = items.filter((item) => item.category === 'couch');

  return (
    <>
      <section className="categories couches">
        <Hero text="Couches" />
        <div className="container">
          <div className="products pt-section">
            {filteredItems.map((item) => {
              return <Card item={item} key={item.id} showNotify={showNotify} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CouchItem;

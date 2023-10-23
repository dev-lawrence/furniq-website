import { useContext } from 'react';
import NotificationContext from '../NotificationContext';
import Card from './Card';
import Hero from './Hero';
import useFetchData from '../hooks/useFetchData';
import { Loading } from './Loading';

const TableItems = () => {
  const { showNotify } = useContext(NotificationContext);
  const { data: products, loading, error } = useFetchData();

  const filteredProducts =
    products.filter((product) => product.category === 'table') || [];
  return (
    <>
      <section className="categories tables">
        <Hero text="Tables" />
        <div className="container">
          <div className="products pt-section">
            {loading ? (
              <Loading />
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              filteredProducts.map((product) => {
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
        </div>
      </section>
    </>
  );
};
export default TableItems;

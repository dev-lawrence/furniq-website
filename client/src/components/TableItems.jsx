import { useContext } from 'react';
import NotificationContext from '../NotificationContext';
import Card from './Card';
import Hero from './Hero';
import useFetchData from '../hooks/useFetchData';
import { Loading } from './Loading';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;

const TableItems = () => {
  const { showNotify } = useContext(NotificationContext);
  const {
    data: products,
    loading,
    error,
  } = useFetchData(VITE_API_URL + '/products?populate=*', VITE_API_TOKEN);

  const filteredItems =
    products?.filter((item) => item?.attributes.category === 'table') || [];
  return (
    <>
      <section className="categories tables">
        <Hero text="Tables" />
        <div className="container">
          <div className="products pt-section">
            {loading ? (
              <Loading />
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              filteredItems.map((item) => {
                return (
                  <Card item={item} key={item.id} showNotify={showNotify} />
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

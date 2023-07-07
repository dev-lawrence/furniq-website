import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import useFetchData from '../hooks/useFetchData';
import { Loading } from './Loading';
const { VITE_API_URL, VITE_API_TOKEN } = import.meta.env;
const Trending = ({ title, showNotify }) => {
  const {
    data: items,
    loading,
    error,
  } = useFetchData(VITE_API_URL + '/products?populate=*', VITE_API_TOKEN);
  const filteredItems = items?.filter((item) => item.id >= 7);
  return (
    <>
      <section className="trending pt-section">
        <div className="d-flex">
          <div className="title">
            <h2>{title}</h2>
          </div>
        </div>

        <Splide
          options={{
            perPage: 1,
            pagination: false,
            gap: '2rem',
            // drag: 'free',
            mediaQuery: 'min',
            speed: 1000,
            breakpoints: {
              768: {
                perPage: 3,
              },

              1200: {
                perPage: 4,
              },
            },
          }}
        >
          {loading ? (
            <Loading />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            filteredItems.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <Card item={item} showNotify={showNotify} />
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </section>
    </>
  );
};

export default Trending;

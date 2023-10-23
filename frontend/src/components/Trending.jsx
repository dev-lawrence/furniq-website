import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Loading } from './Loading';
import useFetchData from '../hooks/useFetchData';

const Trending = ({ title, showNotify }) => {
  const { data: products, loading, error } = useFetchData();

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
            drag: true,
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
            products.map((product) => {
              return (
                <SplideSlide key={product._id}>
                  <Card product={product} showNotify={showNotify} />
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

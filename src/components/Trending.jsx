import { items } from '../data/AllProductsData';
import Card from './Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Trending = ({ title }) => {
  const filteredItems = items.filter((item) => item.id >= 7);
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
            drag: 'free',
            mediaQuery: 'min',
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
          {filteredItems.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <Card item={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      </section>
    </>
  );
};

export default Trending;

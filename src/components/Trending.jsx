import { items } from '../data/AllProductsData';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Card from './Card';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Trending = () => {
  const filteredItems = items.filter((item) => item.id >= 7);

  return (
    <>
      <section className="trending pt-section">
        <div className="d-flex">
          <div className="title">
            <h2>Trending Now</h2>
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

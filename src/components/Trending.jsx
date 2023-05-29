import { items } from '../data/AllProductsData';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Card from './Card';

const Trending = () => {
  const filteredItems = items.filter((item) => item.id >= 7);

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 320;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 335;
  };

  return (
    <>
      <section className="trending pt-section">
        <div className="d-flex">
          <div className="title">
            <h2>Trending Now</h2>
          </div>

          <div className="buttons">
            <button
              title="scroll left"
              onClick={slideLeft}
              className="prev-btn"
            >
              <ArrowBackRoundedIcon className="icon" />
            </button>
            <button
              title="scroll right"
              onClick={slideRight}
              className="next-btn"
            >
              <ArrowForwardRoundedIcon className="icon" />
            </button>
          </div>
        </div>

        <div className="carousel-container" id="slider">
          {filteredItems.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Trending;

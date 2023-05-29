import { items } from '../data/AllProductsData';
import Card from './Card';
import BedIcon from '@mui/icons-material/Bed';
import WeekendIcon from '@mui/icons-material/Weekend';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const filteredItems = items.filter((item) => item.id <= 6);
  return (
    <>
      <section className="featured-product pt-section">
        <div className="title">
          <h2>Featured Products</h2>
          <p>Elevate Your Home with our Handpicked Favorites.</p>
        </div>

        <div className="categories">
          <div className="d-flex">
            <Link className="category">
              <EventSeatIcon className="icon" />
              <p>chairs</p>
            </Link>
            <Link className="category">
              <TableRestaurantIcon className="icon" />
              <p>tables</p>
            </Link>
            <Link className="category">
              <WeekendIcon className="icon" />
              <p>couch</p>
            </Link>
            <Link className="category">
              <BedIcon className="icon" />
              <p>bed</p>
            </Link>
          </div>
        </div>

        <div className="products">
          {filteredItems.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

import BedIcon from '@mui/icons-material/Bed';
import WeekendIcon from '@mui/icons-material/Weekend';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import HomeIcon from '@mui/icons-material/Home';
const FilterProducts = ({ handleFilterChange, selectedProduct }) => {
  return (
    <>
      <div className="filter-products">
        <div className="d-flex">
          <button
            className={`filter-btn ${
              selectedProduct === 'all' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('all')}
          >
            all
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === 'chair' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('chair')}
          >
            chairs
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === 'table' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('table')}
          >
            tables
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === 'couch' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('couch')}
          >
            couch
          </button>
          <button
            className={`filter-btn ${
              selectedProduct === 'bed' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('bed')}
          >
            bed
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterProducts;

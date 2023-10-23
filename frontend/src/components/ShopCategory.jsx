const ShopCategory = ({ selectedProduct, handleFilterChange }) => {
  return (
    <>
      <aside className="sidebar">
        <h3>Categories</h3>

        <div className="filter-products">
          <span
            className={`category ${selectedProduct === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </span>
          <span
            className={`category ${
              selectedProduct === 'table' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('table')}
          >
            Tables
          </span>
          <span
            className={`category ${
              selectedProduct === 'chair' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('chair')}
          >
            Chairs
          </span>
          <span
            className={`category ${selectedProduct === 'bed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('bed')}
          >
            Beds
          </span>
          <span
            className={`category ${
              selectedProduct === 'couch' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('couch')}
          >
            Couches
          </span>
        </div>
      </aside>
    </>
  );
};

export default ShopCategory;

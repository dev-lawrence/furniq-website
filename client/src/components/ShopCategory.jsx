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
            Table
          </span>
          <span
            className={`category ${
              selectedProduct === 'chair' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('chair')}
          >
            Chair
          </span>
          <span
            className={`category ${selectedProduct === 'bed' ? 'active' : ''}`}
            onClick={() => handleFilterChange('bed')}
          >
            Bed
          </span>
          <span
            className={`category ${
              selectedProduct === 'couch' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('couch')}
          >
            Couch
          </span>
        </div>
      </aside>
    </>
  );
};

export default ShopCategory;

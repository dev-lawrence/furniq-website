import { useContext, useState } from 'react';
import Hero from '../components/Hero';
import { items } from '../data/AllProductsData';
import Card from '../components/Card';
import NotificationContext from '../NotificationContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreadCrumbs from '../components/BreadCrumbs';
import ShopCategory from '../components/ShopCategory';
import Pagination from '../components/Pagination';

const Shop = () => {
  const [sortOption, setSortOption] = useState('Sort by latest');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const { showNotify } = useContext(NotificationContext);
  let sortedItems = [...items];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1); // Reset current page when sorting option changes
  };

  if (sortOption === 'hightolow') {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  if (sortOption === 'lowtohigh') {
    sortedItems.sort((a, b) => a.price - b.price);
  }

  if (sortOption === 'sortbynewest') {
    sortedItems = sortedItems.filter((item) => item.isNew === true);
  }

  const filteredItems =
    selectedProduct === 'all'
      ? sortedItems
      : sortedItems.filter((item) => item.category === selectedProduct);

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
    setCurrentPage(1); // Reset current page when filter option changes
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="shop">
        <Hero text="Shop" />
        <div className="container pt-section">
          <BreadCrumbs />
          <div className="heading-flex">
            <div className="title">
              <h2>All products</h2>
            </div>

            <div className="shop-select">
              <select
                name="sort"
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="sortbylatest">Sort by latest</option>
                <option value="hightolow">Sort by price: High to Low</option>
                <option value="lowtohigh">Sort by price: Low to High</option>
                <option value="sortbynewest">Sort by newest</option>
              </select>
              <ExpandMoreIcon className="arrow" />
            </div>
          </div>
          <div className="shop-container">
            <div className="shop-flex">
              <ShopCategory
                selectedProduct={selectedProduct}
                handleFilterChange={handleFilterChange}
              />

              <div className="products">
                {currentItems.map((item) => {
                  return (
                    <Card item={item} key={item.id} showNotify={showNotify} />
                  );
                })}
              </div>
            </div>

            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItems.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

// REAL CODE

// import { useContext, useState } from 'react';
// import Hero from '../components/Hero';
// import { items } from '../data/AllProductsData';
// import Card from '../components/Card';
// import NotificationContext from '../NotificationContext';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import BreadCrumbs from '../components/BreadCrumbs';

// const Shop = () => {
//   const [sortOption, setSortOption] = useState('Sort by latest');
//   const [selectedProduct, setSelectedProduct] = useState('all');
//   const { showNotify } = useContext(NotificationContext);
//   let sortedItems = [...items];

//   const handleSortChange = (event) => {
//     setSortOption(event.target.value);
//   };

//   if (sortOption === 'hightolow') {
//     sortedItems.sort((a, b) => b.price - a.price);
//   }

//   if (sortOption === 'lowtohigh') {
//     sortedItems.sort((a, b) => a.price - b.price);
//   }

//   if (sortOption === 'sortbynewest') {
//     sortedItems = sortedItems.filter((item) => item.isNew === true);
//   }

//   const filteredItems =
//     selectedProduct === 'all'
//       ? sortedItems
//       : sortedItems.filter((item) => item.category === selectedProduct);

//   const handleFilterChange = (category) => {
//     setSelectedProduct(category);
//   };

//   return (
//     <>
//       <section className="shop">
//         <Hero text="Shop" />
//         <div className="container pt-section">
//           <BreadCrumbs />
//           <div className="heading-flex">
//             <div className="title">
//               <h2>All products</h2>
//             </div>

//             <div className="shop-select">
//               <select
//                 name="sort"
//                 id="sort"
//                 value={sortOption}
//                 onChange={handleSortChange}
//               >
//                 <option value="sortbylatest">Sort by latest</option>
//                 <option value="hightolow">Sort by price: High to Low</option>
//                 <option value="lowtohigh">Sort by price: Low to High</option>
//                 <option value="sortbynewest">Sort by newest</option>
//               </select>
//               <ExpandMoreIcon className="arrow" />
//             </div>
//           </div>

//           <div className="shop-flex">
//             <aside className="sidebar">
//               <h3>Categories</h3>

//               <div className="filter-products">
//                 <span
//                   className={`category ${
//                     selectedProduct === 'all' ? 'active' : ''
//                   }`}
//                   onClick={() => handleFilterChange('all')}
//                 >
//                   All
//                 </span>
//                 <span
//                   className={`category ${
//                     selectedProduct === 'table' ? 'active' : ''
//                   }`}
//                   onClick={() => handleFilterChange('table')}
//                 >
//                   Table
//                 </span>
//                 <span
//                   className={`category ${
//                     selectedProduct === 'chair' ? 'active' : ''
//                   }`}
//                   onClick={() => handleFilterChange('chair')}
//                 >
//                   Chair
//                 </span>
//                 <span
//                   className={`category ${
//                     selectedProduct === 'bed' ? 'active' : ''
//                   }`}
//                   onClick={() => handleFilterChange('bed')}
//                 >
//                   Bed
//                 </span>
//                 <span
//                   className={`category ${
//                     selectedProduct === 'couch' ? 'active' : ''
//                   }`}
//                   onClick={() => handleFilterChange('couch')}
//                 >
//                   Couch
//                 </span>
//               </div>
//             </aside>

//             <div className="products">
//               {filteredItems.map((item) => {
//                 return (
//                   <Card item={item} key={item.id} showNotify={showNotify} />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Shop;

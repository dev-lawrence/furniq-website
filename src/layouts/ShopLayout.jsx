import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Shop = () => {
  return (
    <>
      <Header />
      <h1>Shop</h1>
      <Outlet />
    </>
  );
};

export default Shop;

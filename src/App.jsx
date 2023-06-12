import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// styles
import './sass/main.scss';

// layouts
import RootLayout from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';

// pages
import Home from './pages/Home';
import ProductDetails from './pages/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="shop" element={<ShopLayout />}></Route>
      <Route path="product/:name" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './CartContext';
import { NotificationProvider } from './NotificationContext';
// styles
import './sass/main.scss';

// layouts
import RootLayout from './layouts/RootLayout';
import CategoryLayout from './layouts/CategoryLayout';

// pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Tables from './pages/categories/Tables';
import Chairs from './pages/categories/Chairs';
import Beds from './pages/categories/Beds';
import Couches from './pages/categories/Couches';
import ProductDetails from './pages/Product';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="success" element={<Success />} />
      <Route path="category" element={<CategoryLayout />}>
        <Route path="tables" element={<Tables />} />
        <Route path="chairs" element={<Chairs />} />
        <Route path="beds" element={<Beds />} />
        <Route path="couches" element={<Couches />} />
      </Route>
      <Route path="product/:name" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    router.subscribe(() => {
      scrollToTop();
    });
  }, []);

  return (
    <>
      <CartProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </CartProvider>
    </>
  );
};

export default App;

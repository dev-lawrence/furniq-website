import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { CartProvider } from './CartContext';
import { NotificationProvider } from './NotificationContext';
// styles
import './sass/main.scss';

// layouts
import RootLayout from './layouts/RootLayout';
import ShopLayout from './layouts/ShopLayout';

// pages
import Home from './pages/Home';
import ProductDetails from './pages/Product';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<ShopLayout />}></Route>
      <Route path="product/:name" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
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

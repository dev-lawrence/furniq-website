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

// pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Products';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="products/:id" element={<Products />} />
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

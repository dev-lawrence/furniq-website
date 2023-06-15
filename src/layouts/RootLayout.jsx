import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationContext from '../NotificationContext';

const RootLayout = () => {
  const { notify, showNotify } = useContext(NotificationContext);

  return (
    <>
      <Header notify={notify} showNotify={showNotify} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

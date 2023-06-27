import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationContext from '../NotificationContext';
import { motion } from 'framer-motion';

const RootLayout = () => {
  const { notify, showNotify } = useContext(NotificationContext);

  return (
    <>
      <motion.div
      // animate={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      // duration={{ duration: 3 }}
      >
        <Header notify={notify} showNotify={showNotify} />
        <Outlet />
        <Footer />
      </motion.div>
    </>
  );
};

export default RootLayout;

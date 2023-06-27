import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartList from './CartList';
import NavBar from './NavBar';
import CartContext from '../CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ notify }) => {
  const { items: cartItems } = useContext(CartContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [latestItem, setLatestItem] = useState(null);
  const navigate = useNavigate();

  console.log(latestItem);

  useEffect(() => {
    if (cartItems.length > 0) {
      const lastItem = cartItems[cartItems.length - 1];
      setLatestItem(lastItem);
    }
  }, [cartItems]);

  // Handle toggle search
  const handleToggleSearch = () => {
    setToggleSearch((prevToggleSearch) => !prevToggleSearch);
    if (!toggleSearch) {
      setSearchQuery('');
    }
  };

  // Handle search
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/shop?query=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/');
    }
  };

  // Handle cart click
  const handleCartClick = () => {
    setCartClick(!cartClick);
    setOverlay((prevOverlay) => !prevOverlay);
    document.body.classList.add('fixed-body');
  };

  const handleCartClose = () => {
    setCartClick(false);
    setOverlay(false);
    document.body.classList.remove('fixed-body');
  };

  // Handle nav Click
  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
    document.body.classList.add('fixed-body');
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
    document.body.classList.remove('fixed-body');
  };

  return (
    <>
      <AnimatePresence>
        {notify && (
          <motion.div
            initial={{ opacity: 0, top: -100 }}
            animate={{ opacity: 1, top: 30 }}
            exit={{ opacity: 0, top: -100 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="notify"
          >
            <p> ✅ {latestItem.title} added to your cart </p>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="header-section">
        <div className={`overlay ${overlay ? 'show-overlay' : ''}`}></div>

        {/* search input */}
        <form
          onSubmit={handleSearch}
          className={`search-input ${toggleSearch ? 'showSearchInput' : ''}`}
        >
          <input
            type="text"
            value={searchQuery}
            placeholder="Search Items"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="icon" onClick={handleSearch}>
            <SearchRoundedIcon />
          </button>
        </form>
        <div className="container">
          <div className="content d-flex">
            {/* Logo */}
            <div className="logo">
              <Link to="/">Furniq</Link>
            </div>

            {/* NavBar Menu */}
            <NavBar navClick={navClick} handleNavClose={handleNavClose} />

            {/* <!--NAV BUTTONS--> */}
            <div className="menu-buttons">
              <button
                className="toggle-search icon-btn"
                onClick={handleToggleSearch}
              >
                <SearchRoundedIcon className="icon" />
              </button>
              {/* 
              <button className="toggle-account icon-btn">
                <AccountCircleIcon className="icon" />
              </button> */}

              <button
                className="toggle-cart icon-btn"
                onClick={handleCartClick}
              >
                <LocalMallRoundedIcon className="icon" />
                {cartItems.length >= 1 && <span>{cartItems.length}</span>}
              </button>

              <button
                className="toggle-menu icon-btn"
                onClick={navClick ? handleNavClose : handleNavClick}
              >
                {navClick ? (
                  <CloseRoundedIcon className="icon-close" />
                ) : (
                  <MenuRoundedIcon className="icon-bar" />
                )}
              </button>
            </div>

            {/* Cart Menu */}
            <CartList cartClick={cartClick} handleCartClose={handleCartClose} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

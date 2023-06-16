import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartList from './CartList';
import NavBar from './NavBar';
import CartContext from '../CartContext';

const Header = ({ notify }) => {
  const { items: cartItems } = useContext(CartContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [latestItem, setLatestItem] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const lastItem = cartItems[cartItems.length - 1];
      setLatestItem(lastItem);
    }
  }, [cartItems]);

  // Handle toggle search
  const handleToggleSearch = () => {
    setToggleSearch((prevToggleSearch) => !prevToggleSearch);
  };

  // Handle cart click
  const handleCartClick = () => {
    setCartClick((prevCartClick) => !prevCartClick);
  };

  // Handle nav Click
  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
  };

  return (
    <>
      <header id="header-section">
        <div className={`notify ${notify ? 'show' : ''}`}>
          <p>{latestItem.title} has been added ✅</p>
        </div>
        {/* search input */}
        <div
          className={`search-input ${toggleSearch ? 'showSearchInput' : ''}`}
        >
          <input type="text" placeholder="Search Items" />
          <button className="icon">
            <SearchRoundedIcon />
          </button>
        </div>

        <div className="container">
          <div className="content d-flex">
            {/* Logo */}
            <div className="logo">
              <Link to="/">Furniq</Link>
            </div>

            {/* NavBar Menu */}
            <NavBar navClick={navClick} handleNavClick={handleNavClick} />

            {/* <!--NAV BUTTONS--> */}
            <div className="menu-buttons">
              <button
                className="toggle-search icon-btn"
                onClick={handleToggleSearch}
              >
                <SearchRoundedIcon className="icon" />
              </button>

              <button className="toggle-account icon-btn">
                <AccountCircleIcon className="icon" />
              </button>

              <button
                className="toggle-cart icon-btn"
                onClick={handleCartClick}
              >
                <LocalMallRoundedIcon className="icon" />
                {cartItems.length >= 1 && <span>{cartItems.length}</span>}
              </button>

              <button className="toggle-menu icon-btn" onClick={handleNavClick}>
                {navClick ? (
                  <CloseRoundedIcon className="icon-close" />
                ) : (
                  <MenuRoundedIcon className="icon-bar" />
                )}
              </button>
            </div>

            {/* Cart Menu */}
            <CartList cartClick={cartClick} handleCartClick={handleCartClick} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

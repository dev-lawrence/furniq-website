import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartList from './CartList';
import NavBar from './NavBar';
import CartContext from '../CartContext';
import Notification from './Notification';

const Header = () => {
  const { products: cartItems } = useContext(CartContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

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
  };

  const handleCartClose = () => {
    setCartClick(false);
    setOverlay(false);
  };

  // Handle nav Click
  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
  };

  return (
    <>
      <Notification />
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

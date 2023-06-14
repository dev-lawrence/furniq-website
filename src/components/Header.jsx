import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CartList from './CartList';
import NavBar from './NavBar';
import CartContext from '../CartContext';

const Header = ({ notify }) => {
  const { items } = useContext(CartContext);

  const [toggleSearch, setToggleSearch] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navClick, setNavClick] = useState(false);

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
          <p>Item has been added ✅</p>
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

            {/* <!--NAV BUTTONS--> */}
            <div className="menu-buttons">
              <button
                className="toggle-search icon-btn"
                onClick={handleToggleSearch}
              >
                <SearchRoundedIcon className="icon" />
              </button>

              <button
                className="toggle-cart icon-btn"
                onClick={handleCartClick}
              >
                <LocalMallRoundedIcon className="icon" />
                {items.length >= 1 && <span>{items.length}</span>}
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

            {/* NavBar Menu */}
            <NavBar navClick={navClick} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

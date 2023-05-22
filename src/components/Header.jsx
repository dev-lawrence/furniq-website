import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Cart from './Cart';
import NavBar from './NavBar';
const Header = () => {
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
        {/* search input */}
        <div
          className={`search-input ${toggleSearch ? 'showSearchInput' : ''}`}
        >
          <input type="text" placeholder="Search Items" />
          <button className="icon">
            <FaSearch />
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
                className="toggle-search icon"
                onClick={handleToggleSearch}
              >
                <FaSearch />
              </button>

              <button className="toggle-cart icon" onClick={handleCartClick}>
                <FaShoppingCart />
              </button>

              <button className="toggle-menu icon" onClick={handleNavClick}>
                {navClick ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Cart Menu */}
            <Cart cartClick={cartClick} handleCartClick={handleCartClick} />

            {/* NavBar Menu */}
            <NavBar navClick={navClick} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

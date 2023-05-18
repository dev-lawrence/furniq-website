import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  // Handle toggle search
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
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
              <a href="#">Furniq</a>
            </div>

            {/* <!--NAV MENU BUTTONS--> */}
            <div className="menu-buttons">
              <button
                onClick={handleToggleSearch}
                className="toggle-search icon"
              >
                <FaSearch />
              </button>

              <button className="toggle-cart icon">
                <FaShoppingCart />
              </button>

              <button className="toggle-menu icon">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

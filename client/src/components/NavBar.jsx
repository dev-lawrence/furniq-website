import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClick }) => {
  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/" onClick={handleNavClick}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="shop" onClick={handleNavClick}>
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="about" onClick={handleNavClick}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="blog" onClick={handleNavClick}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" onClick={handleNavClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

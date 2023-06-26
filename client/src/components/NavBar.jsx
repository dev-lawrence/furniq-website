import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose }) => {
  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/" onClick={handleNavClose}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="shop" onClick={handleNavClose}>
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="about" onClick={handleNavClose}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="blog" onClick={handleNavClose}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" onClick={handleNavClose}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

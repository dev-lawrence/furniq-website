import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose }) => {
  const handleNavLinkClick = () => {
    handleNavClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="shop" onClick={handleNavLinkClick}>
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="about" onClick={handleNavLinkClick}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="blog" onClick={handleNavLinkClick}>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

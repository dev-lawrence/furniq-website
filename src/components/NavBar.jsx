import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick }) => {
  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>

          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="about">About</NavLink>
          </li>

          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

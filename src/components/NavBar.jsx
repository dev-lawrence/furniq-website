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
            <NavLink to="/shop">Shop</NavLink>
          </li>

          <li>
            <NavLink to="/">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/">About</NavLink>
          </li>

          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

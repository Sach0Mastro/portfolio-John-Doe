import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark py-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <span className="text-white fw-bold">JOHN DOE</span>

        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white text-uppercase">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link text-white text-uppercase">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link text-white text-uppercase">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-white text-uppercase">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mentions-legales" className="nav-link text-white text-uppercase">
              Mentions légales
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
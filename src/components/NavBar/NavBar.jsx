import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.module.css';

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const menuClasses = `nav-bar__links ${
    isMenuVisible ? 'nav-bar__links--visible' : ''
  }`;

  return (
    <nav className="nav-bar">
      <div
        className="nav-bar__button"
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        role="button"
        aria-label="toggleMenu"
        tabIndex={0}
      />
      <div className={menuClasses}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Nuestro Colegio
        </NavLink>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Galería
        </NavLink>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Contactenos
        </NavLink>
        <NavLink to="../Login" style={{ textDecoration: 'none', color: 'white' }}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

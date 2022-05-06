import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import images from '../../assets/images';

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
        <div className="nav-bar__logo">
          <NavLink to="/">
            <img
              className="nav-bar__logo__img"
              src={images.img12}
              alt="icono home"
            />
          </NavLink>
        </div>
        <NavLink
          className="link_title"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div className="nav-bar__link-li">Nuestro Colegio</div>
        </NavLink>
        <NavLink
          className="link_title"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div className="nav-bar__link-li">Galería</div>
        </NavLink>
        <NavLink
          className="link_title"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <div className="nav-bar__link-li">Contacto</div>
        </NavLink>
        <NavLink
          className="link_title"
          to="../Login"
          style={{ textDecoration: 'none' }}
        >
          <div className="nav-bar__button-login">Iniciar Sesión</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

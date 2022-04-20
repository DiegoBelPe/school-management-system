import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

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
        <Link to="/" style={{ color: 'white' }}>
          Nuestro Colegio
        </Link>
        <Link to="/" style={{ color: 'white' }}>
          Galería
        </Link>
        <Link to="/" style={{ color: 'white' }}>
          Contactenos
        </Link>
        <Link to="../Login" style={{ color: 'white' }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

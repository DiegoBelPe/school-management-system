
import { useState } from "react";
import "./NavBar.css"

const NavBar = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // [variableEstado: number, functionDeCambioEstado]
  // false
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const menuClasses = `nav-bar__links ${isMenuVisible ? 'nav-bar__links--visible': ''}`;
  
  return (
    <nav className="nav-bar">
      <button type="button" onClick={toggleMenu}>Menu</button>
      <div className={menuClasses}>
        <a>Nuestro Colegio</a>
        <a>Galería</a>
        <a>Contactenos</a>
        <a>Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
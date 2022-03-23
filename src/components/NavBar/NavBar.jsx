
import { useState } from "react";
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // [variableEstado: number, functionDeCambioEstado]
  // false
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const menuClasses = `nav-bar__links ${isMenuVisible ? 'nav-bar__links--visible': ''}`;
  
  return (
    <nav className="nav-bar">
      <button className='nav-bar__button' type="button" onClick={toggleMenu}></button>  
      <div className={menuClasses}>
        <a>Nuestro Colegio</a>
        <a>Galería</a>
        <a>Contactenos</a>
        <a>
          <Link to='../Login' style={{ color: 'white' }}>
            Login
          </Link> 
        </a>
       
      </div>
    </nav>
  );
};

export default NavBar;
import React, { useState } from 'react';
import './DasNav.css';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

function DasNav() {
  const [openC, setOpenC] = useState(false);
  const openMenu = () => {
    setOpenC(!openC);
  };

  return (
    <div id="sidemenu" className={openC ? 'menu-expanded' : 'menu-collapsed'}>
      <div id="header" className="header">
        <div id="sidemenu-title">
          <span>High School</span>
        </div>
        <div
          id="menu-btn"
          onClick={openMenu}
          onKeyDown={openMenu}
          role="button"
          tabIndex={0}
        >
          <div className="btn-hamburger" />
          <div className="btn-hamburger" />
          <div className="btn-hamburger" />
        </div>
      </div>

      <div id="profile">
        <div id="profile-photho">
          <img src={images.img1} alt="" />
        </div>
        <div id="profile-name">
          <span>Diego Beltran</span>
        </div>
      </div>

      <div id="menu-items">
        <div className="item">
          <Link to="/dash">
            <div className="icon">
              {' '}
              <img src={images.img2} alt="icono home" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Principal</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div className="item">
          <Link to="/dash/messages">
            <div className="icon">
              {' '}
              <img src={images.img3} alt="" />
            </div>
            <div className="title">
              {' '}
              <span>Mensajes</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div className="item">
          <Link to="/dash/calendar">
            <div className="icon">
              {' '}
              <img src={images.img4} alt="" />
            </div>
            <div className="title">
              {' '}
              <span>Calendario</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div className="item">
          <Link to="/dash/table">
            <div className="icon">
              {' '}
              <img src={images.img5} alt="" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Tareas</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div className="item">
          <Link to="/dash/schedule">
            <div className="icon">
              {' '}
              <img src={images.img6} alt="" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Horario</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div className="item">
          <Link to="/dash/estudiantes">
            <div className="icon">
              {' '}
              <img src={images.img7} alt="" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Notas</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
      </div>
    </div>
  );
}

export default DasNav;

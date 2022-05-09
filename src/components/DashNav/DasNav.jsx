import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DasNav.css';
import { Link } from 'react-router-dom';
import images from '../../assets/images';
import { logout } from '../../store/auth/actions/auth';

function DasNav() {
  const [openC, setOpenC] = useState(false);
  const gradeId = useSelector((state) => state.auth.user.gradeId[0].id);
  const messageId = useSelector((state) => state.auth.user.gradeId[0].id);
  const taskUrl = `/dash/table/${gradeId}`;
  const messageUrl = `/dash/message/${messageId}`;
  const openMenu = () => {
    setOpenC(!openC);
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
          <img
            src="https://res.cloudinary.com/borismg04/image/upload/v1651865609/qtj8cfr0fuqd6edau4ve.png"
            alt=""
          />
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
          <Link to={messageUrl}>
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
          <Link to={taskUrl}>
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
              <img src={images.img10} alt="" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Estudiantes</span>
              {' '}
            </div>
          </Link>
        </div>
        <div className="item separator" />
        <div
          className="item"
          onClick={handleLogout}
          onKeyPress={handleLogout}
          role="button"
          tabIndex="0"
        >
          <Link to="/">
            <div className="icon">
              {' '}
              <img src={images.img9} alt="" />
              {' '}
            </div>
            <div className="title">
              {' '}
              <span>Cerrar Sesión</span>
              {' '}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DasNav;

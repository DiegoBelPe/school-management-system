import React, { useState } from 'react';
import './DasNav.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../assets/images';
import { logout } from '../../store/auth/actions/auth';

function DasNav() {
  const [openC, setOpenC] = useState(false);
  // const studentId = useSelector((state) => state.auth.user.studentId[0].id);
  const gradeId = useSelector((state) => state.auth.user.studentId[0].gradeId);

  const urlTasks = `/dashUser/taskUser/${gradeId}`;
  const urlMessage = `/dashUser/CrudUser/message/${gradeId}`;
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
            src="https://res.cloudinary.com/borismg04/image/upload/v1651782518/vokrlm18kyulpsjtmucn.png"
            alt=""
          />
        </div>
        <div id="profile-name">
          <span>Boris Monroy</span>
        </div>
      </div>

      <div id="menu-items">
        <div className="item">
          <Link to="/dashUser/page-user-dash">
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
          <Link to={urlMessage}>
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
          <Link to="/dashUser/calendar">
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
          <Link to={urlTasks}>
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
          <Link to="/dashUser/schedule">
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

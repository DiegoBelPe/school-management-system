import React, { useState } from 'react'
import './DasNav.css'
import images from '../../assets/images'
import { Link } from 'react-router-dom';



const DasNav = (props) => {
    const[openC, setOpenC]=useState(false);
    const openMenu=()=>{
      setOpenC(!openC)
      
    }

    const menuClasses = `menu-expanded' ${openC ? 'menu-collapsed ': ''}`;

  return (
    <>
    <div id="sidemenu" className="menu-collapsed"class={menuClasses} >
   
    <div id="header" class="header">
      <div id="sidemenu-title"><span>High School</span></div>
      <div id="menu-btn" onClick={openMenu} >
        <div className="btn-hamburger"></div>
        <div className="btn-hamburger"></div>
        <div className="btn-hamburger"></div>
    </div>
    </div>
   
    <div id="profile">
      <div id="profile-photho"><img src={images.img1} alt=""/></div>
      <div id="profile-name"><span>Diego Beltran</span></div>
    </div>
    
    <div id="menu-items">
      <div className="item">
        <a href="">
          <div className="icon"> <img src={images.img2} alt=""/>  </div>
          <div className="title"> <span>Principal</span> </div>
        </a>
      </div>
      <div className="item separator"></div>
      <div className="item">
        <a href="">
          <div className="icon"> <img src={images.img3} alt=""/></div>
          <div className="title"> <span>Mensajes</span> </div>
        </a>
      </div>
      <div className="item separator"></div>
      <div className="item">
        <a href="">
          <div className="icon"> <img src={images.img4} alt=""/></div>
          <div className="title"> <span>Calendario</span> </div>
        </a>
      </div>
      <div className="item separator"></div>
      <div className="item">
        <a href="">
          <div className="icon"> <img src={images.img5}alt=""/>  </div>
          <div className="title"> <span>Tareas</span> </div>
        </a>
      </div>
      <div className="item separator"></div>
      <div className="item">
        <Link to="../Schedule">
          <div className="icon"> <img src={images.img6} alt=""/>  </div>
          <div className="title"> <span>Horario</span> </div>
        </Link>
      </div>
      <div className="item separator"></div>
      <div className="item">
        <a href="">
          <div className="icon"> <img src={images.img7} alt=""/>  </div>
          <div className="title"> <span>Notas</span> </div>
        </a>
      </div>
      <div className="item separator"></div>
    </div>
  </div>
    
    
    </>
  )
}

export default DasNav
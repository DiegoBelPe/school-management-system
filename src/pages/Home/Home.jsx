import React from 'react'
/* import ContImg from '../../components/ContImg/ContImg' */
import "./Home.css"


const Home = () => {
  return (
    <>
    <div className="container-global">
    <div className="nav-bar">
      <button className='nav-bar__button'   type="button">Menu</button>
      <span>Login</span>
      <span>Contactenos</span>
      <span>Galería</span>
      <span>Nuestro Colegio</span>
    </div>
    <div className="content">
      <div className="content__slide">slide</div>
      <div className="content__card">card1</div>
      <div className="content__card">card2</div>
    </div>
    <footer className="footer">Footer</footer>
  </div>
  </>
  )
}

export default Home
import React from 'react'
/* import ContImg from '../../components/ContImg/ContImg' */
import "./Home.css"


const Home = () => {
  return (
    <div class="container-global">
    <div class="nav-bar">
      <button type="button">Menu</button>
      <span>Login</span>
      <span>Contactenos</span>
      <span>Galería</span>
      <span>Nuestro Colegio</span>
    </div>
    <div class="content">
      <div class="content__slide"></div>
      <div class="content__card">card1</div>
      <div class="content__card">card2</div>
    </div>
    <footer class="footer">Footer</footer>
  </div>
    
  )
}

export default Home
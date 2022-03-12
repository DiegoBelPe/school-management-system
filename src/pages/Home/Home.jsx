import React from 'react'
import ContImg from '../../components/ContImg/ContImg'
/* import ContImg from '../../components/ContImg/ContImg' */
import styles from "./Home.module.css"


const Home = () => {
  return (
    <>
    <div className={styles.container__global}>
    <div className={styles.nav__bar}>
      <button className={styles.nav_bar__button}  type="button">Menu</button>
      <span>Login</span>
      <span>Contactenos</span>
      <span>Galería</span>
      <span>Nuestro Colegio</span>
    </div>
    <div className={styles.content}>
      <div className={styles.content__slide}><ContImg/></div>
      <div className={styles.content__card}>card1</div>
      <div className={styles.content__card}>card2</div>
    </div>
    <footer className={styles.footer}>Footer</footer>
  </div>
  </>
  )
}

export default Home
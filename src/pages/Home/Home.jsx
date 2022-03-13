import React from 'react'
import ContImg from '../../components/ContImg/ContImg'
/* import ContImg from '../../components/ContImg/ContImg' */
import styles from "./Home.module.css"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Cards'


const Home = () => {
  return (
    <>
    <div className={styles.container__global}>
    <div className={styles.nav__bar}>
      <NavBar/>
    </div>
    <div className={styles.container}>
      <div className={styles.content__slide}><ContImg/></div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__card}><Cards/></div>
      <div className={styles.content__card}><Cards/></div>
    </div>
    <footer className={styles.footer}><Footer/></footer>
  </div>
  </>
  )
}

export default Home
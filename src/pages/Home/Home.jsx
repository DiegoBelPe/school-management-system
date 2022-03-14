import React from 'react'
import ContImg from '../../components/ContImg/ContImg'
/* import ContImg from '../../components/ContImg/ContImg' */
import styles from "./Home.module.css"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Cards'
import logo1 from "../../assets/mensaje-dash.svg"
import logo2 from "../../assets/tareas-dash.svg"


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
      <div className={styles.content__card}><Cards img={logo1} title="Ultimas Noticias" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse porro eum officia laborum ex ad quam, reiciendis assumenda quisquam amet consectetur omnis vitae inventore distinctio eius minima rem ea."/></div>
      <div className={styles.content__card}><Cards img={logo2}  title="Ultimos comunicados" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse porro eum officia laborum ex ad quam, reiciendis assumenda quisquam amet consectetur omnis vitae inventore distinctio eius minima rem ea."/></div>
    </div>
    <footer className={styles.footer}><Footer/></footer>
  </div>
  </>
  )
}

export default Home


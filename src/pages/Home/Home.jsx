import React from 'react';
import ContImg from '../../components/ContImg/ContImg';
import styles from './Home.module.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer/Footer';
/* import Cards from '../../components/Cards/Cards';
import logo1 from '../../assets/mensaje-dash.svg';
import logo2 from '../../assets/tareas-dash.svg'; */
import About from '../About/About';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <div className={styles.container__global}>
        <div className={styles.nav__bar}>
          <NavBar />
        </div>
        <div className={styles.container}>
          <div className={styles.content__slide}>
            <ContImg />
          </div>
        </div>
        <div className={styles.content__card}>
          <About />
        </div>
        <div className={styles.content__contact}>
          <Contact />
        </div>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;

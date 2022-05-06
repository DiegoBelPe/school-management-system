import React from 'react';
import ContImg from '../../components/ContImg/ContImg';
import styles from './Home.module.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Contact from '../../components/Contact/Contact';
import IntroHome from '../../components/IntroHome/IntroHome';

function Home() {
  return (
    <div className={styles.container__global}>
      <NavBar />
      <IntroHome />
      <About />
      <ContImg />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

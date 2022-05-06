import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroHome.module.css';
import images from '../../assets/images';

function IntroHome() {
  return (
    <div className={styles.container_intro}>
      <div className={styles.container_intro_text}>
        <h1 className={styles.title_intro}>El aprendizaje es un continuo</h1>
        <p className={styles.text_intro}>
          La educación ayuda a la persona a aprender a ser lo que es capaz de
          ser.
        </p>
        <Link to="/" className={styles.link_intro}>
          <span className={styles.button_intro_text}>Conocer más</span>
        </Link>
      </div>
      <div className={styles.container_image}>
        <img src={images.img13} alt="" />
      </div>
    </div>
  );
}

export default IntroHome;

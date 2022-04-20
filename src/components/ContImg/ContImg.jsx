import React from 'react';
import one from '../../assets/slide.png';
import two from '../../assets/slide02.jpg';
import three from '../../assets/slide03.jpg';
import four from '../../assets/slide04.jpg';
import styles from './ContImg.module.css';

function ContImg() {
  return (
    <>
      <div className={styles.container} />

      <div className={styles.slider}>
        <ul>
          <li>
            <img className={styles.slider__img} src={one} alt="home" />
          </li>
          <li>
            <img className={styles.slider__img} src={two} alt="home2" />
          </li>
          <li>
            <img className={styles.slider__img} src={three} alt="home3" />
          </li>
          <li>
            <img className={styles.slider__img} src={four} alt="home4" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContImg;

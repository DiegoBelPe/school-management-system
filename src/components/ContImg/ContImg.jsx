import React from 'react';
import image from '../../assets/images';
import styles from './ContImg.module.css';

function ContImg() {
  return (
    <>
      <div className={styles.container} />
      <div className={styles.container__title}>
        <h2>Testimonios</h2>
      </div>

      <div className={styles.slider}>
        <ul>
          <li>
            <img className={styles.slider__img} src={image.img17} alt="home" />
          </li>
          <li>
            <img className={styles.slider__img} src={image.img18} alt="home2" />
          </li>
          <li>
            <img className={styles.slider__img} src={image.img19} alt="home3" />
          </li>
          <li>
            <img className={styles.slider__img} src={image.img20} alt="home4" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContImg;

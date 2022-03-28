import React from 'react';
import style from './About.module.css';
import images from '../../assets/images';

const About = () => {
  return (
    <div className={style.section__about}>
      <div className={style.container__title}>
      <h2 className={style.about__title}> Conoce nuestro colegio</h2>
      </div>
      <div className={style.section__content}>
        <div className={style.about__img}>
          <img className={style.about__img__png} src={images.img8} alt="" />
        </div>
        <div className="about_description">
          <p className={style.about__text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            aperiam minus magnam sequi, libero neque asperiores, modi commodi
            dolorem quos ullam, ratione illo iusto ad nesciunt labore adipisci
            blanditiis. Ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

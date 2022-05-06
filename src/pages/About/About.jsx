import React from 'react';
import style from './About.module.css';
import images from '../../assets/images';

function About() {
  return (
    <div className={style.section__about}>
      <div className={style.container__title} />
      <div className={style.section__content}>
        <div className={style.about__img}>
          <img className={style.about__img__png} src={images.img14} alt="" />
        </div>
        <div className={style.about_description}>
          <p className={style.about__text}>
            <p>
              {' '}
              ✅Proponemos la EDUCACIÓN INTEGRAL atendiendo que la autoestima,
              el sentido por la vida, el altruismo, el desarrollo físico y
              mental, la autonomía personal, la comunicación y sociabilidad, la
              apertura al cambio y la espiritualidad son las dimensiones a
              potenciar en nuestros educandos.
            </p>
            <br />
            <p>
              ✅Respetamos y reconocemos la tradición de nuestros mayores y de
              los fundadores de la Institución, fundamentando nuestra
              espiritualidad en la religión católica, pero como nos enseñan los
              principios de nuestra fe, acogemos la espiritualidad como uno de
              los valiosos dones de la humanidad.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

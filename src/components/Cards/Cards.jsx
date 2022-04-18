import React from 'react';
import style from './Cards.module.css';

function Cards(props) {
  const [title, img, text] = props;
  return (
    <div className={style.container}>
      <div className={style.container__card}>
        <div className={style.card__title}>
          <img className={style.card__img} src={img} alt="img_cards" />
          <h2>{title}</h2>
        </div>
        <div className={style.card__text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;

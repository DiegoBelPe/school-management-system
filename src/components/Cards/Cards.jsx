import React from 'react';
import style from './Cards.module.css';

function Cards(props) {
  return (
    <div className={style.container}>
      <div className={style.container__card}>
        <div className={style.card__title}>
          <img className={style.card__img} src={props.img} alt="img_cards" />
          <h2>{props.title}</h2>
        </div>
        <div className={style.card__text}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;

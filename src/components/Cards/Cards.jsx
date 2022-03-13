import React from 'react'
import style from './Cards.module.css'

const Cards = (props) => {
  return (
    <>
    <div className={style.container}>
        <div className={style.container__card}>
            <div className={style.card__title}>{props.title}</div>
            <div className={style.card__text}>{props.text}</div>
        </div>
    </div>
    </>
  )
}

export default Cards
import React from 'react'
import slide from "../../assets/slide.png"
import './ContImg.css'

const ContImg = () => {
  return (
    <div className='container'>
        <img className='container__img' src={slide} alt="home" />
    </div>
  )
}

export default ContImg
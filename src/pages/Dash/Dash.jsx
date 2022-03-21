import React from 'react'
import dash from './Dash.module.css'
import FunctionContainer from '../../components/FunctionContainer/FunctionContainer'

const DashBoard = () => {
  return (
    <>
        <div className={dash.grid__container}>
            <div className={dash.header}>HEADER</div>
            <div className={dash.navbar}>NAVBAR</div>
            <div className={dash.main}><FunctionContainer/></div>
            <div className={dash.footer}>FOOTER</div>
        </div>
    </>
  )
}

export default DashBoard;
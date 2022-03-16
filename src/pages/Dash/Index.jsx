import React from 'react'
import dash from './Dash.module.css'
import DashNav from '../../components/DashNav/DasNav'


const index = () => {
  return (
    <>
        <div className={dash.grid__container}>
            <div className={dash.header}>HEADER</div>
            <div className={dash.navbar}><DashNav/></div>
            <div className={dash.main}>MAIN</div>
            <div className={dash.footer}>FOOTER</div>
        </div>
    </>
  )
}

export default index
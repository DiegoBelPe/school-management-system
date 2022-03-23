import React from 'react';
import dash from './Dash.module.css';
import DashNav from '../../components/DashNav/DasNav';

const Dash = () => {
  return (
    <>
      <div className={dash.container__dash}>
        <div className={dash.header__dash}>HEADER</div>
        <div className={dash.navbar}>
          <DashNav />
        </div>
        <div className={dash.main}>Hola mundo</div>
        <div className={dash.footer}>FOOTER</div>
      </div>
    </>
  );
};

export default Dash;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Dash.module.css';
import DashNav from '../../components/DashNav/DasNav';

function Dash() {
  return (
    <div className={styles.container__dash}>
      {/* <div className={styles.header__dash}>HEADER</div> */}
      <div className={styles.navbar}>
        <DashNav />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      {/* <div className={styles.footer}>FOOTER</div> */}
    </div>
  );
}

export default Dash;

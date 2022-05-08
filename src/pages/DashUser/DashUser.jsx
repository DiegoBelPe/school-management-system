import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashUser.module.css';
import DashNavUser from '../../components/DashNavUser/DasNavUser';

function Dash() {
  return (
    <div className={styles.container__dash}>
      {/* <div className={styles.header__dash}>HEADER</div> */}
      <div className={styles.navbar}>
        <DashNavUser />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      {/* <div className={styles.footer}>FOOTER</div> */}
    </div>
  );
}

export default Dash;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Dash.module.css';
import DashNav from '../../components/DashNav/DasNav';
<<<<<<< HEAD
import DataTable from '../../components/DataTable/DataTable';
import Schedule from '../../components/Schedule/Schedule';
import Accordion from '../../components/Accordion/Accordion'
=======
>>>>>>> 135fb5efae654e12d63bdb62877547a7636648d0


const Dash = () => {
  
  return (
    <>
      <div className={styles.container__dash}>
        <div className={styles.header__dash}>HEADER</div>
        <div className={styles.navbar}>
          <DashNav />
        </div>
<<<<<<< HEAD
        <div className={dash.main}><Schedule/></div>
        <div className={Accordion.accordion}><Accordion/></div>
        <div className={dash.footer}>FOOTER</div>
=======
        <div className={styles.main}>
          <Outlet />
        </div>
        <div className={styles.footer}>FOOTER</div>
>>>>>>> 135fb5efae654e12d63bdb62877547a7636648d0
      </div>
    </>
  );
};

export default Dash;

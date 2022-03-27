import React from 'react';
import styles from './Dash.module.css';
import DashNav from '../../components/DashNav/DasNav';
import DataTable from '../../components/DataTable/DataTable';
import Schedule from '../../components/Schedule/Schedule';
import { useLocation } from 'react-router-dom';

const Dash = (props) => {
  const { pathname } = useLocation();
  let component = null;
  switch (pathname) {
    case '/dash/schedule':
      component = <Schedule />;
      break;
    case '/dash/table':
      component = <DataTable />;
      break;
    default:
      break;
  }
  return (
    <>
      <div className={styles.container__dash}>
        <div className={styles.header__dash}>HEADER</div>
        <div className={styles.navbar}>
          <DashNav />
        </div>
        <div className={styles.main}>{component}</div>
        <div className={styles.footer}>FOOTER</div>
      </div>
    </>
  );
};

export default Dash;

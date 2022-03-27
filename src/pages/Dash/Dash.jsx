import React from 'react';
import dash from './Dash.module.css';
import DashNav from '../../components/DashNav/DasNav';
import DataTable from '../../components/DataTable/DataTable';
import Schedule from '../../components/Schedule/Schedule';
import Accordion from '../../components/Accordion/Accordion'

const Dash= () => {
  return (
    <>
      <div className={dash.container__dash}>
        <div className={dash.header__dash}>HEADER</div>
        <div className={dash.navbar}>
          <DashNav />
        </div>
        <div className={dash.main}><Schedule/></div>
        <div className={Accordion.accordion}><Accordion/></div>
        <div className={dash.footer}>FOOTER</div>
      </div>
    </>
  );
};

export default Dash;

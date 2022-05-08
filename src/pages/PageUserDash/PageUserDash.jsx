import React from 'react';
import style from './PageUserDash.module.css';
import AccordionUi from '../../components/AccordionUI/AccordionUI';

function PageUserDash() {
  return (
    <div className={style.container__user_dash}>
      <div className={style.container_card_info}>nombre alumno</div>
      <div className={style.container__accordion}>
        <AccordionUi />
      </div>
    </div>
  );
}

export default PageUserDash;

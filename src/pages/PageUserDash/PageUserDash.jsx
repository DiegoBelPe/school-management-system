import React from 'react';
import style from './PageUserDash.module.css';
import AccordionUi from '../../components/AccordionUI/AccordionUI';
import MuiAccordion from '../../components/MuiAccordion/MuiAccordion';

function PageUserDash() {
  return (
    <div className={style.container__user_dash}>
      <div className={style.container_card_info}>
        <div className={style.container_card_info_title}>
          <img
            className={style.image__card}
            src="https://res.cloudinary.com/borismg04/image/upload/v1651633044/jcs7g28mquibdzxxq2sc.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className={style.container_info__text}>
          <h2> Datos del estudiante</h2>
          <h4> Nombres </h4>
          <h4> Curso </h4>
          <h4> Identificacion </h4>
          <h4> Año academico </h4>
        </div>
      </div>
      <div className={style.container__accordion}>
        <AccordionUi />
        <MuiAccordion />
      </div>
    </div>
  );
}

export default PageUserDash;

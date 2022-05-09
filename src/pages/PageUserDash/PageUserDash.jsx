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
            src="http://res.cloudinary.com/borismg04/image/upload/v1652115151/hxu07c2avtja5mpummu8.png"
            alt=""
            srcSet=""
          />
          <div className={style.container_info}>
            <h2 className={style.container_infoTitle}> Datos del estudiante</h2>
            <div className={style.container_info__label}>
              <h4> Nombres: Cristian Moreno </h4>
              <h4> Curso: 302 </h4>
              <h4> Identificación: 12345678 </h4>
              <h4> Año académico: Tercero </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container__accordion}>
        <AccordionUi />
      </div>
      <MuiAccordion />
    </div>
  );
}

export default PageUserDash;

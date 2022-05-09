import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './MuiAccordion.module.css';

export default function SimpleAccordion() {
  return (
    <div className={styles.container__accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h4>Proximas Tareas</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Matematicas Ejercicios de Fraccionarios.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h4>Los Ultimos Mensajes</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se les recuerdan a los acudientes del periodo de evaluaciones para el tercer periodo.
            <p>Gracias.</p>
            <h4>Att.High School Make It Real Camp.</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <h4>Recordatorio</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El sistema de pagos estara abierto a la primer semana de cada mes.
            <p>Gracias.</p>
            <h4>Att.High School Make It Real Camp.</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

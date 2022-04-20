import React, { useState } from 'react';
import Accordion from './Accordion';
import './Accordion.css';

function Index() {
  const [active, setActive] = useState('Title1');
  return (
    <div className="App">
      <Accordion
        title="Bandeja de Entrada"
        active={active}
        setActive={setActive}
      />
      <Accordion title="Notificaciones" active={active} setActive={setActive} />
    </div>
  );
}
export default Index;

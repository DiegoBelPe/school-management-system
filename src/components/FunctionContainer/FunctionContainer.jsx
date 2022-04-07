import React from 'react';
import './FunctionContainer.css';

const elementsName = ['Tareas', 'Mensajes', 'Calendario', 'Horario'];

function FunctionContainer() {
  const printElements = () => elementsName.map((functions) => <div className="functionContainer">{functions}</div>);

  return (
    <div className="">
      {printElements()}
    </div>
  );
}

export default FunctionContainer;

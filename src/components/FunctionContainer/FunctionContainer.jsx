import React from 'react'
import './FunctionContainer.css'

const elementsName = ['Tareas', 'Mensajes', 'Calendario']


const FunctionContainer  = () => {

    const printElements = () => {
        return elementsName.map(functions => <div className='functionContainer'>{functions}</div>)
    }

    return (
        <div className=''>
           {printElements()}
        </div>
    );
}

export default FunctionContainer;
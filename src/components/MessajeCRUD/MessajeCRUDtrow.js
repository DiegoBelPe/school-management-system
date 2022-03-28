import React from 'react'

const MessajeCRUDtrow = ({el , setDataToEdit , deleteData}) => {
  let {name, messaje , id}=el;
  return (
    <tr>
      <td>{name}</td>
      <td>{messaje}</td>
      <td>
      <button onClick={()=> setDataToEdit(el)}>Editar</button>
      <button onClick={()=> deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

MessajeCRUDtrow.propTypes = {}

export default MessajeCRUDtrow;
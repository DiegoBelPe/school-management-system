// import React, { useState } from 'react';
// import MessajeCRUDform from './MessajeCRUDform';
// import MessajeCRUDtable from './MessajeCRUDtable';

// const initialDb = [
//   {
//     id: 1,
//     name: 'Boris',
//     messaje: 'Hola mundo',
//   },
//   {
//     id: 2,
//     name: 'Diego',
//     messaje: 'Top v20',
//   },
//   {
//     id: 3,
//     name: 'NN',
//     messaje: 'jummmp',
//   },
// ];

// function MessajeCRUD() {
//   const [db, setDb] = useState(initialDb);
//   const [dataToEdit, setDataToEdit] = useState(null);

//   const createData = (data) => {
//     // eslint-disable-next-line no-param-reassign
//     data.id = Date.now();
//     setDb([...db, data]);
//   };

//   const updateData = (data) => {
//     const newData = db.map((el) => (el.id === data.id ? data : el));
//     setDb(newData);
//   };

//   const deleteData = (id) => {
//     const isDelete = window.customAlert(
//       `¿Estas seguro de eliminar el registro con el ID '${id}'?`,
//     );

//     if (isDelete) {
//       const newData = db.filter((el) => el.id !== id);
//       setDb(newData);
//     } else {
//       // eslint-disable-next-line no-console
//       console.log('No se elimino el registro');
//     }
//   };

//   return (
//     <div>
//       <h2>CRUD Messaje</h2>
//       <MessajeCRUDform
//         createData={createData}
//         updateData={updateData}
//         dataToEdit={dataToEdit}
//         setDataToEdit={setDataToEdit}
//       />
//       <MessajeCRUDtable
//         data={db}
//         setDataToEdit={setDataToEdit}
//         deleteData={deleteData}
//       />
//     </div>
//   );
// }

// export default MessajeCRUD;

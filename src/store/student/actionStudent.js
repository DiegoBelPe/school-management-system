export const getAllStudents = (students) => ({ type: 'GET_STUDENTS', payload: students });
export const postStudent = (student) => ({ type: 'CREATE_STUDENT', payload: student });
export const patchStudent = (student) => ({ type: 'UPDATE_STUDENT', payload: student });
export const deleteStudents = (id) => ({ type: 'DELETE_STUDENT', payload: id });

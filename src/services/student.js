const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getStudent() {
  try {
    const resp = await fetch(`${BASE_URL}/api/student`);
    const student = await resp.json();
    return student;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getStudentById(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/student/${id}`);
    const student = await resp.json();
    return student;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createStudent(student) {
  try {
    const resp = await fetch(`${BASE_URL}/api/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    const newStudent = await resp.json();
    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateStudent(student) {
  try {
    const resp = await fetch(`${BASE_URL}/api/student/${student.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    const updatedStudent = await resp.json();
    return updatedStudent;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteStudent(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/student/${id}`, {
      method: 'DELETE',
    });
    const deletedStudent = await resp.json();
    return deletedStudent;
  } catch (error) {
    throw new Error(error);
  }
}

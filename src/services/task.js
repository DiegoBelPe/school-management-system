/* const BASE_URL = process.env.REACT_APP_API_BASE_URL; */
const BASE_URL = 'http://localhost:8080';

export async function getTask(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/grade/homeWork/${id}`);
    const tasks = await resp.json();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
}
export async function oneTask(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/tareas/${id}`);
    const task = await resp.json();
    return task;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createTask(id, task) {
  try {
    const resp = await fetch(`${BASE_URL}/api/grade/homeWork/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    const newTask = await resp.json();
    return newTask;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateTask(task) {
  try {
    const resp = await fetch(`${BASE_URL}/api/tareas/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const updatedTask = await resp.json();
    return updatedTask;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteTask(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/grade/homeWork/${id}`, {
      method: 'DELETE',
    });
    const deletedTask = await resp.json();
    return deletedTask;
  } catch (error) {
    throw new Error(error);
  }
}

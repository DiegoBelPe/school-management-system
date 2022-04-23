const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getTask() {
  try {
    const resp = await fetch(`${BASE_URL}/api/tareas`);
    const tasks = await resp.json();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneTask(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/tareas/${id}`);
    const task = await resp.json();
    return task;
  } catch (error) {
    throw new Error(error);
  }
}

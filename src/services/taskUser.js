const BASE_URL = 'http://localhost:8080/api/grade';

export async function getTask() {
  try {
    const resp = await fetch(`${BASE_URL}`);
    const tasks = await resp.json();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getTasks(id) {
  try {
    const resp = await fetch(`${BASE_URL}/${id}`);
    const task = await resp.json();
    return task;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createTask(task) {
  try {
    const resp = await fetch(`${BASE_URL}/api/tareas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
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
    const resp = await fetch(`${BASE_URL}/api/tareas/${id}`, {
      method: 'DELETE',
    });
    const deletedTask = await resp.json();
    return deletedTask;
  } catch (error) {
    throw new Error(error);
  }
}

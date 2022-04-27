export const getAllTasks = (tasks) => ({ type: 'GET_TASKS', payload: tasks });
export const postTask = (task) => ({ type: 'CREATE_TASK', payload: task });
export const patchTask = (task) => ({ type: 'UPDATE_TASK', payload: task });
export const deleteTasks = (id) => ({ type: 'DELETE_TASK', payload: id });

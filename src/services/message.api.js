const BASE_URL = 'http://localhost:8080';// 'https://backend-school-management.herokuapp.com';

export async function getMessage() {
  try {
    const resp = await fetch(`${BASE_URL}/api/message`);
    const message = await resp.json();
    return message;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getMessageById(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/message/${id}`);
    const message = await resp.json();
    return message;
  } catch (error) {
    throw new Error(error);
  }
}

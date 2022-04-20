const API_URL = 'http://localhost:8080/api';

async function getWeekSchedule() {
  try {
    const response = await fetch(`${API_URL}/schedules`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getWeekSchedule;

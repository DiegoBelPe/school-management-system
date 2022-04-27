import axios from 'axios';
import authHeader from './auth-Header';

const API_URL = 'https://backend-school-management.herokuapp.com/login';
const getPublicContent = () => axios.get(`${API_URL}all`);
const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });
const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

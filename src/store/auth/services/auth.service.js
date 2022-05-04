import axios from 'axios';

const API_URL = 'https://backend-school-management.herokuapp.com/login';

const login = (email, password) => axios.post(API_URL, {
  email,
  password,
})
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
const logout = () => {
  localStorage.removeItem('user');
};

const activateAccount = (token) => fetch(`${API_URL}/verify-account/${token}`);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  activateAccount,
};
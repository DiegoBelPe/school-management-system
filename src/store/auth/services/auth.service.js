import axios from 'axios';

const API_URL = 'http://localhost:8080/login';

const login = (email, password) => axios.post(API_URL, {
  email,
  password,
})
  .then((response) => {
    console.log(response.data);
    if (response) {
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

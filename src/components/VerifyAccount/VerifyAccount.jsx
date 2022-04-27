import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './VerifyAccount.module.css';

const API_URL = 'http://localhost:8080/login/';

function Activate() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const activate = async () => {
      const response = await fetch(`${API_URL}/verify-account/${token}`);
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    };
    activate();
  }, []);

  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
}

export default Activate;

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const API_URL = 'http://localhost:8080/login/';

function Activate() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const activate = async () => {
      const response = await fetch(`${API_URL}/verify-account/${token}`);
      const data = await response.json();
      console.log('data', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    };
    activate();
  }, []);

  return (
    <div>
      <h1>Tu cuenta ha sido activada exitosamente</h1>
    </div>
  );
}

export default Activate;

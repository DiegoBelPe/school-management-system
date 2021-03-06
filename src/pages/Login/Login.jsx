import './Login.css';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../store/auth/actions/auth';

// eslint-disable-next-line consistent-return
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es requerido
      </div>
    );
  }
};

function Login() {
  const form = useRef();
  /*   const checkBtn = useRef(); */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  /* const { message } = useSelector((state) => state.message); */
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const user = e.target.value;
    setUsername(user);
  };
  const onChangePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (username) {
      dispatch(login(username, password))
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    const { rol } = JSON.parse(localStorage.getItem('user'));
    console.log(rol);
    if (rol === 'admin') {
      return <Navigate to="/dash" />;
    }
    if (rol === 'parent') {
      return <Navigate to="/dashUser/page-user-dash" />;
    }
  }

  return (
    <div className="containerLogin">
      <div className="screenLogin">
        <div className="screen__content">
          <form className="login" onSubmit={handleLogin} ref={form}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="Usuario"
                name="username"
                value={username}
                onChange={onChangeUsername}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Contrase??a"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
            <button
              type="submit"
              className="button login__submit"
              disabled={loading}
            >
              <span className="button__text">Ingresar</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

export default Login;

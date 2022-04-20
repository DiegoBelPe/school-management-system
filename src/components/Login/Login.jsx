import './Login.css'
import  { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { login } from "../../auth/actions/auth";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Este campo es requerido
        </div>
      );
    }
  };

const Login  = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      if (username) {
        dispatch(login(username, password))
          .then(() => {
            props.history.push("/dash");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
    if (isLoggedIn) {
      return <Navigate to="/dash" />;
    }

    return (
        <div className="containerLogin">
            <div className="screenLogin">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin} ref={form}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Usuario"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}>
                            </input>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}>
                            </input>
                        </div>
                        <button className="button login__submit" disabled={loading}>
                            <span className="button__text">Ingresar</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
}

export default Login;

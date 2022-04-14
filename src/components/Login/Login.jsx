import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="containerLogin">
      <div className="screenLogin">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input type="text" className="login__input" placeholder="Usuario" />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input type="password" className="login__input" placeholder="Contraseña" />
            </div>
            <button className="button login__submit">
              <Link to="../dash">
                <span className="button__text">Ingresar</span>
                <i className="button__icon fas fa-chevron-right" />
              </Link>
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

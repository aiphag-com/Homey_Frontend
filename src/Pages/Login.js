//ENGINE
import React, {useState} from "react";
import axios from "axios";
import Icon from "@mdi/react";
//ICONS
import { mdiEye, mdiEyeOff } from "@mdi/js";

const Login = () => {
  const [loginAuth, setLoginAuth] = useState();
  const [showPassword, setShowPassword] = useState();

  const handleChange = (e) => {
    const dataLogin = { ...loginAuth, [e.target.name]: e.target.value };
    setLoginAuth(dataLogin);
  };

  const handleLogin = () => {
    loginAxios();
  };

  const swichPassword = () => setShowPassword(!showPassword);

  const loginAxios = () => {
    const url = process.env.REACT_APP_BACKEND_API + "/api/users/login";
    const errorWarning = document.getElementById("errorText");

    axios
      .post(url, {
        user_email: loginAuth.user_email,
        user_password: loginAuth.user_password,
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          console.log("ERROR 401");
          errorWarning.innerHTML = "Contraseña incorrecta!";
        }
        if (error.response.status === 400) {
          console.log("ERROR 400");
          errorWarning.innerHTML = "User incorrecto!";
        }
      })
      .then((res) => {
        console.log(res.data);
        errorWarning.innerHTML = " ";
      });
  };

  return (
    <>
      <div className="login_main">
        <div className="login_main_container2">
          <div>
            <img
              src="./images/LogoHomey.png"
              alt="Homey Logo"
              className="img__logo"
            />
          </div>

          <h1 className="font__title">Te damos la bienvenida</h1>
          <h2 className="font__secondary">Ingresa con tu email de empresa</h2>

          <div>
            <div>
              <div className="login_input-container">
                <input
                  type="text"
                  placeholder="email"
                  value={loginAuth?.user_email}
                  name="user_email"
                  className="login_input"
                  onChange={handleChange}
                />
              </div>

              <div className="login_input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="user_password"
                  value={loginAuth?.user_password}
                  className="login_input"
                  onChange={handleChange}
                />

                <button
                  name="visibilityBtn"
                  className="btn-password"
                  onClick={swichPassword}
                >
                  {showPassword ? (
                    <Icon path={mdiEyeOff} size={1} />
                  ) : (
                    <Icon path={mdiEye} size={1} />
                  )}
                </button>
              </div>

              <div className="font__error" id="errorText"></div>

              <button className="btn-primary" onClick={handleLogin}>
                INICIAR SESIÓN
              </button>
            </div>

            <div className="font__terciary">
              <p>
                ¿Olvidaste tu clave? Puedes&nbsp;
                <a className="font__link" href="http://localhost:3000/error">
                  Recuperar clave
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font__quad">
              ¿Eres empresa y quieres vender a través de la plataforma?
            </p>

            <button type="vendedor" className="btn-secondary">
              SOLICITAR CUENTA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

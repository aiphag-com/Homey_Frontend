//ENGINE
import React, { useState } from "react";
import axios from "axios";
import LogoHomie from '../Assets/LogoHomey.png';
import { Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Login = () => {
  const [loginAuth, setLoginAuth] = useState();
  const handleChange = (e) => {
    const dataLogin = { ...loginAuth, [e.target.name]: e.target.value };
    setLoginAuth(dataLogin);
  };

  const handleLogin = () => {
    loginAxios();
  };


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
      <div className="flex items-center justify-center align-middle	h-screen">
        <div className="border-solid border-[3px] rounded-xl border-[#BC92E9] bg-[#ffffff] font-poppins leading-8">
          <div className="m-12 flex flex-col items-center justify-center">
              <img
                src={LogoHomie}
                alt="Homey Logo"
              />
            <p className="text-base text-[#696969] mt-4">Te damos la bienvenida</p>
            <p className="text-sm text-[#949494] mt-4">Ingresa con tu email de empresa</p>
                  <Space direction="vertical">
                    <Input
                      placeholder="email"
                      value={loginAuth?.user_email}
                      name="user_email"
                      onChange={handleChange}
                    />
                    <Input.Password
                      placeholder="password"
                      name="user_password"
                      value={loginAuth?.user_password}
                      onChange={handleChange}
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                  </Space>
                  <p className="text-sm text-[#071C65] mt-2">
                  ¿Olvidaste tu clave? Puedes&nbsp;
                  <a href="http://localhost:3000/error" className="text-[#22C7C7]">
                    Recuperar clave
                  </a>
                </p>
                <Button type="primary" onClick={handleLogin} className="my-2">
                  INICIAR SESIÓN
                </Button>
              <p className="text-base text-[#696969] mt-4">
                ¿Eres empresa y quieres vender a través de la plataforma?
              </p>
              <Button onClick={handleLogin} className="my-2 ">
                       Solicitar cuenta
              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

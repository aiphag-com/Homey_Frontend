//ENGINE
import React, { useState } from "react";
import axios from "axios";
//import LogoHomie from "../Assets/LogoHomey.png";
import LogoHomie from "../Assets/LogoHomey_1.png";
import { Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

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
        <div className="border-solid border-[2px] rounded-xl border-[#EFDBFF] bg-[#ffffff] font-poppins leading-8">
          <div className="m-12 flex flex-col items-center justify-center">
            <img src={LogoHomie} alt="Homey Logo" width={300}/>
            <p className="text-[24px] text-[#696969] mt-4">
              Te damos la bienvenida
            </p>
            <p className="text-[20px] text-[#949494] mt-4">
              Ingresa con tu email de empresa
            </p>
            <Space direction="vertical">
              <Input
                placeholder="email"
                value={loginAuth?.user_email}
                name="user_email"
                onChange={handleChange}
                size="large"
                style={{
                  height: 65,
                  width: 475,
                  borderRadius: 7,
                  borderColor: "#f0f0f0",
                  //font-height:14px
                }}
              />
              <Input.Password
                placeholder="password"
                name="user_password"
                value={loginAuth?.user_password}
                onChange={handleChange}
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{
                  height: 65,
                  width: 475,
                  borderRadius: 7,
                  borderColor: "#f0f0f0",
                  fontSize: 18
                }}
              />
            </Space>
            <p className="text-sm text-[#FE5500] mt-4">
              PLACEHOLDER ERROR
            </p>
            <p className="text-sm text-[#071C65] mt-8">
              ¿Olvidaste tu clave? Puedes&nbsp;
              <a href="http://localhost:3000/error" className="text-[#22C7C7]">
                Recuperar clave
              </a>
            </p>
            <Button
              type="primary"
              size="large"
              onClick={handleLogin}
              block
              style={{
                background: "#9254DE",
                height: 65,
                color: "white",
                borderRadius: 7,
                borderColor: "transparent",
                fontSize: 24
              }}
            >
              INICIAR SESIÓN
            </Button>
            <p className="text-base text-[#696969] mt-8">
              ¿Eres empresa y quieres vender a través de la plataforma?
            </p>
            <Button
              type="primary"
              size="large"
              onClick={handleLogin}
              block
              style={{
                background: "#ffffff",
                height: 65,
                color: "#9254DE",
                borderWidth: "2px",
                borderRadius: 7,
                borderColor: "#9254DE",
                fontSize: 24
              }}
            >
              SOLICITAR CUENTA
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

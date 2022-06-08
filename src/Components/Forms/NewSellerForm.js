import React, { useCallback, useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiCloseCircle, mdiThumbUpOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { emailRegexValidation } from "../../Utils/Utils";

const NewSellerForm = () => {
  const [form, setForm] = useState({
    cuit: "",
    direccion: "",
    cp: "",
    email: "",
    telefono: "",
    cvu: "",
  });
  const [errorsData, setErrorsData] = useState(null);
  //the useState shows the form page
  const [count, setCount] = useState(1);
  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };



  const sum = () => {
    setCount(count + 1)
  }

  const res = () => {
    setCount(count - 1)
  }

  const validateErrors = useCallback(() => {
    const errors = {};
    let isError = false;

    if (!form?.cuit || form?.cuit.length !== 11) {
      errors['cuit'] = true;
      isError = true;
    }
    if (!form?.direccion || form?.direccion.length < 10) {
      errors['direccion'] = true;
      isError = true;
    }
    if (!form?.cp || form?.cp.length !== 4) {
      errors['cp'] = true;
      isError = true;
    }
    if (!form?.telefono || form?.telefono.length !== 10) {
      errors['telefono'] = true;
      isError = true;
    }
    if (!form?.email || form?.email.length < 10
      || emailRegexValidation.test(form?.email) === false) {
      errors['email'] = true;
      isError = true;
    }

    return {
      isError, errors,
    };
  }, [form]);

  const handleNextStep = () => {
    const { isError, errors } = validateErrors();
    if (isError) {
      setErrorsData(errors);
    } else {
      setErrorsData(null);
      sum();
    }
  };

  return (
    <div className="flex items-center justify-center align-middle h-screen bg-primaryI font-poppins leading-8 w-full">
      <div className="block items-center p-10  border-solid border-[2.5px] rounded-xl border-primaryI bg-[#ffffff]">
        {count === 1 ? (
          <div>
            <p className="text-xl text-[#838383]">
              Crear una cuenta de empresa
            </p>
            <p className="text-4xl font-bold">1. Carga datos de la empresa</p>

            <p className="text-xl text-normal text-[#161616]"> CUIT </p>
            <div className="flex flex-col">
              <Input
                name="cuit"
                type="number"
                placeholder="xx-xxxxxxx-x"
                onChange={updateForm}
                value={form.cuit}
                style={{width: '44%' }}
                />
              {errorsData?.cuit ? <p>El numero de CUIT debe tener 11 digitos y solo se permiten numeros</p>: null}
            </div>
            <br />

            <p className="text-xl text-normal text-[#161616]">
              Domicilio de facturacion
            </p>

            <div className="flex">
              <div className="mr-10">
                <p className="text-sm text-normal text-[#161616]">
                  Direccion
                </p>
                <div>
                  <Input
                    placeholder="address"
                    onChange={updateForm}
                    name="direccion"
                    value={form.direccion}
                  />
                 {errorsData?.direccion ? <p>La direccion debe tener como minimo 10 caracteres</p> : null}
                </div>
              </div>

              <div className="mr-10">
                <p className="text-sm text-normal text-[#161616]">
                  CP
                </p>
                <div>
                  <Input
                    type="number"
                    placeholder="xxxx"
                    onChange={updateForm}
                    name="cp"
                    value={form.cp}
                  />
                {errorsData?.cp ? <p>El codigo postal es de 4 numeros</p> : null}
                </div>
              </div>

            </div>

            <br />
            <p className="text-xl text-normal text-[#161616]">
              Mail de contacto
            </p>
            <div>
              <Input
                placeholder="empresa@mail"
                onChange={updateForm}
                name="email"
                value={form.email}
              />
            {errorsData?.email ? <p>El correo electronico debe contener @ y .com</p> : null}
            </div>

            <br />
            <p className="text-xl text-normal text-[#161616]"> Telefono </p>
            <div>
              <Input
                type="number"
                placeholder="xx-xxx-xx-xxxxxxx"
                onChange={updateForm}
                name="telefono"
                value={form.telefono}
              />
           {errorsData?.telefono ? <p>El telefono debe contener 10 numeros</p> : null}
            </div>
          </div>
        ) : null}

        {count === 2 ? (
          <div>
            <p className="text-xl text-semibold text-[#838383]">
              Escribe datos bancarios
            </p>
            <p className="text-4xl font-bold">2. Asociar con Mercado Pago</p>

            <p className="text-xl text-normal text-[#161616]"> CVU </p>
            <div>

              {/* Validate number type only */}
              <Input
                placeholder="xxx-xxxx-xxxx"
                min={0}
                onChange={updateForm}
                name="cvu"
                value={form.cvu}
              />
            {errorsData?.cvu ? <p>El C.V.U debe contener 22 numeros</p> : null}
            </div>

            <div className="flex flex-col items-center justify-center mb-10 mt-10">
              {/* //si Mercado Pago API retorna sin errores: mostrar ok, sino error*/}
              <Icon
                id="ok"
                className="text-[#71F7D7]"
                path={mdiCheckCircle}
                size={2}
              />
              <Icon
                id="error"
                className="text-error"
                path={mdiCloseCircle}
                size={2}
              />

              <p className="text-xl text-normal text-[#161616]">
                NOMBRE EMPRESA
              </p>

              <div className="flex">
                <p className="text-normal  text-[#161616]"> CUIT/CUIL: </p>
                <p className=" ml-2 text-l  text-normal  text-[#161616]">
                  999.999.999
                </p>
              </div>

              <div className="flex">
                <p className="text-normal  text-[#161616]"> ALIAS: </p>
                <p className=" ml-2 text-l  text-normal  text-[#161616]">
                  alias name
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {count === 3 ? (
          <div className="flex flex-col items-center justify-center">

            <Icon
              id="ok"
              className="text-[#71F7D7]"
              path={mdiThumbUpOutline}
              size={3}
            />

            <div>
              <p >se ha generado una cuenta empresa para:</p>
            </div>

            <p className="text-3xl font-medium text-[#161616]">(Nombre empresa)</p>

            <div>
              <p>
                Se ha enviado un correo eletronico con usuario y clave a la
                direccion de correo de contacto cargado.
              </p>
            </div>

            <br />
          </div>
        ) : null}

        <div className="flex items-center justify-center">
          {/* if count is equal to 0, do not show "back" btn */}
          {count === 3 ? (
            <Link to="/AdminDashboard">
              <button
                className="p-4 rounded-lg font-medium bg-[#ffffff]  text-[#8B11EF] border-2 border-[#8B11EF]">
                Cargar otra empresa
              </button>
            </Link>
          ) : (
            <>
              <Button
                onClick={handleNextStep}
                type="default"
                size="large"
                className="mt-7"
                style={{
                  background: "#8B11EF",
                  color: "#ffffff",
                  borderRadius: 7,
                }}
              >
                {count === 1 ? "siguiente" : "generar usuario"}
              </Button>
              {count !== 1 ?
                (<Button
                  onClick={() => res()}
                  type="default"
                  size="large"
                  className="mt-7 ml-5"
                  style={{
                    background: "#ffffff",
                    borderRadius: 7,
                  }}
                >
                  atras
                </Button>)
                : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewSellerForm;

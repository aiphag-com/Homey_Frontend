import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiCloseCircle, mdiThumbUpOutline  } from "@mdi/js";

const NewSellerForm = () => {
  const [form, setForm] = useState({
    cuit: "",
    direccion: "",
    cp: "",
    email: "",
    telefono: "",
    cvu: "",
  });
  const [count, setCount] = useState(3);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  return (
    <div
      id="seller_main"
      className="flex items-center justify-center bg-[#EFDEFF]"
      onSubmit={() => alert(`Submited thing: ${form.email}`)}
    >
      <div
        id="seller_container"
        className="block items-center p-10  border-solid border-[2.5px] rounded-xl border-[#EFDEFF] bg-[#ffffff]"
      >
        {count === 1 ? (
          <div>
            <p className="text-xl text-semibold text-[#838383]">
              Crear una cuenta de empresa
            </p>
            <p className="text-4xl font-bold">1. Carga datos de la empresa</p>

            <p className="text-xl text-normal text-[#161616]"> CUIT </p>
            <div>
              <input
                placeholder="xx-xxxxxxx-x"
                onChange={updateForm}
                name="cuit"
                value={form.cuit}
              />
            </div>
            <br />

            <p className="text-xl text-normal text-[#161616]">
              {" "}
              Domicilio de facturacion{" "}
            </p>

            <div className="flex">
              <div className="mr-10">
                <p className="text-sm text-normal text-[#161616]">
                  {" "}
                  Direccion{" "}
                </p>
                <div>
                  <input
                    placeholder="address"
                    onChange={updateForm}
                    name="direccion"
                    value={form.direccion}
                  />
                </div>
              </div>

              <div>
                <p className="text-l text-normal text-[#161616]"> CP </p>
                <div>
                  <input
                    placeholder="xxxx"
                    onChange={updateForm}
                    name="cp"
                    value={form.cp}
                  />
                </div>
              </div>
            </div>

            <br />
            <p className="text-xl text-normal text-[#161616]">
              {" "}
              Mail de contacto{" "}
            </p>
            <div>
              <input
                placeholder="empresa@mail"
                onChange={updateForm}
                name="email"
                value={form.email}
              />
            </div>

            <br />
            <p className="text-xl text-normal text-[#161616]"> Telefono </p>
            <div>
              <input
                type="tel"
                pattern="[0-9] {5}"
                placeholder="xx-xxx-xx-xxxxxxx"
                onChange={updateForm}
                name="telefono"
                value={form.telefono}
              />
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
              <input
                type="number"
                placeholder="xxx-xxxx-xxxx"
                min={0}
                onChange={updateForm}
                name="cvu"
                value={form.cvu}
              />
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

              <p  className="text-xl text-normal text-[#161616]">
                {" "}
                NOMBRE EMPRESA{" "}
              </p>

              <div className="flex">
                <p className="text-normal  text-[#161616]"> CUIT/CUIL: </p>
                <p className=" ml-2 text-l  text-normal  text-[#161616]">
                  {" "}
                  999.999.999{" "}
                </p>
              </div>

              <div className="flex">
                <p className="text-normal  text-[#161616]"> ALIAS: </p>
                <p className=" ml-2 text-l  text-normal  text-[#161616]">
                  {" "}
                  alias name{" "}
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
                path={mdiThumbUpOutline }
                size={3}
              />

            <div>
              <p >se ha generado una cuenta empresa para:</p>
            </div>

            <p  className="text-3xl font-medium text-[#161616]">(Nombre empresa)</p>

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
          {count === 3 ? (
            <button className="p-4 rounded-lg font-medium bg-[#ffffff]  text-[#8B11EF] border-2 border-[#8B11EF]">
            Cargar otra empresa
            </button>
          ) : (
            <button className="p-4 rounded-lg bg-[#8B11EF] text-[#ffffff] ">
              {count === 1 ? "siguiente" : "generar usuario"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewSellerForm;

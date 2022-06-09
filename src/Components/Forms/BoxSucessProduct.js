import React from "react";
import { Button, Steps } from "antd";

const BoxSucessProduct = ({ setCount }) => {
  const {Step} = Steps;

  return (
    <div
      id="seller_main"
      className="flex justify-center bg-[#ffffff] font-poppins"
    >
      <div
        id="seller_container"
        className="p-10 border-solid border-[2.5px] rounded-xl border-primaryI bg-[#ffffff] v-screen"
      >
        {/*STEPS*/}
        <div className="flex justify-center mb-6">
          <Steps current={2}>
            <Step title="Paso 1" description="Carga datos del producto"/>
            <Step title="Paso 2" description="Opciones de Realidad Aumentada"/>
            <Step title="Paso 3" description="Procesando"/>
          </Steps>
        </div>
        {/*FIN STEPS*/}

        <div className="flex">
          <p>La carga de datos de producto se ha realizado con exito!</p>
        </div>
        <div className="flex">
          <p className="mr-2">
            La solicitud esta siendo procesada, podes verlo en
          </p>
          <a href="/CataloguePage">catalogo</a>
        </div>

        <div className="flex justify-left mt-8">
          <Button
            style={{
              background: "#9254DE",
              color: "#ffffff",
              borderColor: "transparent",
              borderRadius: 7,
            }}
          >
            Completar producto
          </Button>
        </div>

        <div className="flex justify-left mt-4">
          <Button
            onClick={() => setCount(2)}
            style={{
              background: "transparent",
              borderWidth: "2px",
              borderRadius: 7,
              color: "#C7C7C7",
            }}
          >
            Volver Atras
          </Button>
        </div>

        {/*FIN CARGAR PRODUCTO*/}
      </div>
    </div>
  );
};

export default BoxSucessProduct;

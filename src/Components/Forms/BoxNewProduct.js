import React from "react";
import placeHolderImage from "../../Assets/placeHolderImage.png";
import { Button, Radio } from "antd";

const BoxNewProduct = () => {
  return (
    <div className="flex items-center justify-center h-screen font-poppins gap-16">

      {/*TITULOS*/}
      <div className="mb-14">
        <div>
          <p className="text-4xl font-bold mb-2">Modelo 3D</p>
          <p className="text-xl text-[#838383]">Elige una opcion</p>

          <div className="flex flex-col">
            <Radio style={{ marginBottom: "12px" }}> Precio por unidad </Radio>
            <Radio style={{ marginBottom: "12px" }}>
              {" "}
              Ya tengo el archivo{" "}
            </Radio>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#ACACAC",
                marginBottom: "24px",
                borderRadius: 7,
                borderColor: "transparent",
              }}
            >
              {" "}
              COMPLETAR
            </Button>
            <Button
              type="primary"
              style={{
                background: "transparent",
                borderWidth: 2,
                borderRadius: 7,
                borderColor: "#ACACAC",
                color: "#ACACAC",
                height: 32,
              }}
            >
              {" "}
              Volver al menu
            </Button>
          </div>
        </div>
      </div>
      {/*FIN TITULOS*/}

      {/*IMAGENES*/}
      <div className="">
        <img src={placeHolderImage} alt="" />
        <div className="flex flex-col text-center mt-2">
          <p className="text-xl font-bold">Nombre del producto apariencia</p>
          <p className="text-lg font-thin">$ XXX</p>
        </div>
      </div>
      {/*FIN IMAGENES*/}

    </div>
  );
};

export default BoxNewProduct;

import React from "react";
import { Button } from "antd";

const BoxSucessProduct = () => {
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
        <div className="flex justify-center">
          <p>Steps!</p>
        </div>
        {/*FIN STEPS*/}

        <div className="flex">
            <p>La carga de datos de producto se ha realizado con exito!</p>
        </div>    
        <div className="flex">
            <p className="mr-2">La solicitud esta siendo procesada, podes verlo en</p>
            <a href="/SellerDashboard">catalogo</a>
        </div>

        {/*CARGAR PRODUCTO*/}
        <div className="flex justify-left mt-8">
            <Button
            style={{
                background: "#9254DE",
                color: "#ffffff",
                borderColor: "transparent",
                borderRadius: 7,
            }}>
                Completar producto
            </Button>
        </div>

        <div className="flex justify-left mt-4">
            <Button
            style={{
                background: "transparent",
                borderWidth: "2px",
                borderRadius: 7,
                color: "#C7C7C7"
            }}>
                Volver Atras
            </Button>
        </div>

        {/*FIN CARGAR PRODUCTO*/}
      </div>
    </div>
  );
};

export default BoxSucessProduct;

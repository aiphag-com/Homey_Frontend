import { Button } from "antd";
import React, { useState } from "react";
import BoxNewProduct from "../../Components/Forms/BoxNewProduct";
import NewProductForm from "../../Components/Forms/NewProductForm";
import Header from "../../Components/Base/Header";
import Icon from "@mdi/react";
import { mdiThumbUpOutline } from "@mdi/js";

const NewProductPage = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <Header />
      {count === 1 ? (
        <div className="flex items-center justify-center">
          <NewProductForm />
          <div className="mx-4" />
          <div className="flex flex-col items-center justify-center">
            <BoxNewProduct />
            <Button type="primary" shape="round" className="mt-4" onClick={() => setCount(count + 1)}>
              Siguiente
            </Button>
          </div>
        </div>
      ) : null
      }
      {count === 2 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="p-10  border-solid border-[2.5px] rounded-xl border-[#EFDEFF] bg-[#ffffff]">
            <div className="flex flex-col items-center justify-center">
              <Icon
                id="ok"
                className="text-[#71F7D7]"
                path={mdiThumbUpOutline}
                size={3}
              />
              <p>Muchas gracias</p>
              <p className="text-3xl font-medium text-[#161616]">(Nombre producto)</p>
              <p>Se ha enviado un correo electrónicopara la evaluación del fbx.</p>
              <Button type="primary" shape="round" className="mt-4" onClick={() => setCount(count - 1)}>
              Cargar otro producto
            </Button>
            </div>
          </div>
        </div>
      ) : null
      }
    </>
  )
}

export default NewProductPage;
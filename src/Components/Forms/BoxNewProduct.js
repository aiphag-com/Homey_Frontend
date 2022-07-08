import React from "react";
import placeHolderImage from "../../Assets/placeHolderImage.png";
import { Button, Radio, Steps } from "antd";

const BoxNewProduct = ({ setCount, setForm, form }) => {
  const {Step} = Steps;

  const updateForm = (e) => {
    console.log(e.target);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="flex justify-center font-poppins gap-16">
      {/*TITULOS*/}
      <div className="mb-14">

        {/*STEPS*/}
        <div className="flex justify-center mb-6">
          <Steps current={1}>
            <Step title="Paso 1" description="Carga datos del producto"/>
            <Step title="Paso 2" description="Opciones de Realidad Aumentada"/>
            <Step title="Paso 3" description="Procesando"/>
          </Steps>
        </div>
        {/*FIN STEPS*/}

        <div className="flex">

          {/*TITULOS*/}
          <div className=" mr-16">
          <p className="text-4xl font-bold mb-2">Modelo 3D</p>
          <p className="text-xl text-[#838383]">Elige una opcion</p>

          <div className="flex flex-col">
            <Radio.Group name="render" onChange={updateForm} value={form.render}>
              <Radio value={false} style={{ display: "flex", marginBottom: "12px" }}> Deseo que me contacten para realizar el render </Radio>
              <Radio value={true} style={{ display: "flex", marginBottom: "12px" }}> Ya tengo el archivo </Radio>
            </Radio.Group>

            <Button
              type="primary"
              size="large"
              onClick={() => setCount(3)}
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
              onClick={() => setCount(1)}
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
          {/*FIN TITULOS*/}

          {/*IMAGENES*/}
          <div className="">
            <img src={placeHolderImage} alt="" />
            <div className="flex flex-col text-center mt-2">
              <p className="text-xl font-bold">{form?.name}</p>
              <p className="text-lg font-thin">$ {form?.price}</p>
            </div>
          </div>
          {/*FIN IMAGENES*/}

        </div>
      </div>
    </div>
  );
};

export default BoxNewProduct;

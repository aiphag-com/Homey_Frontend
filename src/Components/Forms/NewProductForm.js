import React, { useState } from "react";
import { Button, Input, Upload, Radio, Steps } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { category } from "../../Utils/Utils";

const NewProductForm = ({ setCount, setForm, form }) => {
  const [selected, setCategory] = useState();

  const {Step} = Steps;


  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const categorySelect = (e) => {
    setCategory(e.target.id);
  };

  console.log(selected);

  return (
    <div
      id="seller_main"
      className="flex justify-center bg-[#ffffff] font-poppins"
      onSubmit={() => alert(`Submited thing: ${form.email}`)}
    >
      <div
        id="seller_container"
        className="p-10 border-solid border-[2.5px] rounded-xl border-primaryI bg-[#ffffff] v-screen"
      >
        {/*STEPS*/}
        <div className="flex justify-center mb-6">
          <Steps current={0}>
            <Step title="Paso 1" description="Carga datos del producto"/>
            <Step title="Paso 2" description="Opciones de Realidad Aumentada"/>
            <Step title="Paso 3" description="Procesando"/>
          </Steps>
        </div>
        {/*FIN STEPS*/}

        {/*TITULOS*/}
        <div>
          <div />
          <p className="text-4xl font-bold mb-2">
            Cargar un nuevo producto al catalogo
          </p>
          <p className="text-xl text-[#838383]">
            Escribe los datos del producto
          </p>
        </div>
        {/*FIN TITULOS*/}

        {/* nombre del producto */}
        <div>
          <div className="mb-8" />
          <p className="text-sm mb-3"> Escribe Nombre del producto </p>
          <Input
            name="nombre"
            value={form.nombre}
            onChange={updateForm}
            placeholder="nombre del producto..."
          />
        </div>
        {/* fin nombre del producto */}

        {/* precio */}
        <div className="flex flex-col mb-8">
          <div className="mb-8" />
          <p className="text-sm"> PRECIO </p>
          <Radio style={{ marginBottom: "12px" }}> Precio por unidad </Radio>
          <Input
            placeholder="precio...."
            onClick={updateForm}
            value={form.direccion}
            style={{ marginBottom: "12px", width: "50%" }}
          />
          <Radio> Solicitar una cotizacion </Radio>
        </div>
        {/* fin precio */}

        {/* descripcion */}
        <div>
          <div className="mb-8" />
          <p> Añade una descripcion del producto </p>

          <TextArea rows={3} placeholder="AUTO SIZE" maxLength={150} />
        </div>
        {/* fin descripcion */}

        {/* categorias */}
        <div>
          <div className="mb-8" />
          <p> A que categorias esta relacionado? </p>

          <div className="grid grid-cols-4 m-2 gap-4">
            {category.map((category) => (
              <button
                key={category.key}
                id={category.id}
                value={category.name}
                onClick={categorySelect}
                className={`${
                  selected === category.id
                    ? "bg-[#FFD6E7] border-2 rounded-md border-[#9E1068] text-[#9E1068] font-semibold"
                    : "bg-[#F5F5F5] rounded-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* fin categorias */}

        {/* categorias dos */}
        <div>
          <div className="mb-8" />
          <p>
            {" "}
            Selecciona objetos relacionados para que los compradores puedan
            encontrar el producto{" "}
          </p>

          <div className="grid grid-cols-3 gap-2">
            {category[selected]?.subCategory.map((category) => (
              <button
                key={category.key}
                id={category.id}
                name={category[selected]?.subCategory.name}
                //onClick={subcategorySelect}
                className={`${
                  selected === category.id
                    ? "bg-[#FFD6E7] rounded-md text-[#9E1068]"
                    : "bg-[#F5F5F5] rounded-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* fin categorias dos */}

        {/* stock */}
        <div>
          <div className="mb-8" />
          <p> Posee stock actualmente? </p>

          <div className="flex flex-col gap-2">
            <Radio> Si </Radio>
            <Radio> No </Radio>
          </div>
        </div>
        {/* fin stock */}

        {/* subir imagen */}
        <div>
          <div className="mb-8" />
          <p> Cargar fotos del producto </p>

          <Upload listType="picture">
            <Button
              style={{
                borderColor: "#C41D7F",
                color: "#C41D7F",
                borderRadius: 7,
              }}
              icon={<UploadOutlined />}
            >
              Adjuntar Archivos
            </Button>
          </Upload>
        </div>
        {/* fin subir imagen */}
        <div className="mt-10">
          <Button
            onClick={() => setCount(2)}
            style={{
              background: "#9254DE",
              borderWidth: "2px",
              borderRadius: 7,
              borderColor: "transparent",
              color: "#ffffff",
            }}
          >
            SIGUIENTE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewProductForm;

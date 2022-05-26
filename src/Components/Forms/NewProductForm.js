import React, { useState } from "react";
import { Button, Input, Upload, Modal, Radio, Space } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';
import { getBase64, uploadButton } from "../../Utils/Utils";

const NewProductForm = () => {
  const [form, setForm] = useState({
    cuit: "",
    direccion: "",
    cp: "",
    email: "",
    telefono: "",
    cvu: "",
  });
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleCancel = () => setPreviewVisible(false);
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };



  return (
    <>
      <div
        id="seller_main"
        className="flex h-screen v-screen items-center justify-center mt-32"
        onSubmit={() => alert(`Submited thing: ${form.email}`)}
      >
        <div
          id="seller_container"
          className="block items-center p-10  border-solid border-[2.5px] rounded-xl border-[#EFDEFF] bg-[#ffffff]"
        >
          <p className="text-3xl font-bold">Cargar nuevo producto</p>

          {/* Nombre y precio de producto */}
          <div className="flex">
            <div className="mr-10">
              <p className="text-sm text-normal text-[#161616]">
                Escribe nombre de producto
              </p>
              <div>
                <Input
                  placeholder="address"
                  onClick={updateForm}
                  name="direccion"
                  value={form.direccion}
                />
              </div>
            </div>
            <div>
              <p className="text-l text-normal text-[#161616]">Precio</p>
              <div>
                <Input
                  placeholder="xxxx"
                  onClick={updateForm}
                  name="cp"
                  value={form.cp}
                />
              </div>
            </div>
          </div>
          {/* FIN Nombre y precio de producto */}

          {/* Selecciona grupos de categorías */}
          <div className="mt-4">
            <p className="text-1xl font-bold">Selecciona grupos de categorías</p>
            <div className="grid  grid-cols-3 m-4">
              <Button type="primary" shape="round" className="m-2">
                Category 1
              </Button>
              <Button type="primary" shape="round" className="m-2">
                Category 2
              </Button>
              <Button type="primary" shape="round" className="m-2" >
                Category 3
              </Button>
              <Button name="Category_4" type="primary" shape="round" className="m-2" >
                Category 4
              </Button>
              <Button name="Category_5" type="primary" shape="round" className="m-2" >
                Category 5
              </Button>
              <Button name="Category_6" type="primary" shape="round" className="m-2" >
                Category 6
              </Button>
            </div>
          </div>
          {/* FIN Selecciona grupos de categorías */}

          {/* Añade descripción */}
          <div className="flex flex-col">
            <p className="text-1xl font-bold">Añade descripción </p>
            <TextArea rows={4} placeholder="El maximo de caracteres es 150" maxLength={150} />
            <div className="mt-2">
              <Upload>
                <Button icon={<UploadOutlined />}>Upload text</Button>
              </Upload>
            </div>
          </div>
          {/* FIN Añade descripción */}

          {/*  SUBIR IMAGEN*/}
          <div className="mt-2 w-96">
            <Upload
              listType="picture-card"
              fileList={fileList}
              maxCount="10"
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 10 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          {/*  FIN SUBIR IMAGEN*/}

          {/*  Realidad aumentada*/}
          <div>
            <p className="text-1xl font-bold">Realidad aumentada</p>
            <Radio.Group>
            <Space direction="vertical">
                <Radio value={1}>Deseo que me contacten para hacer el render</Radio>
                <Radio value={2}>Ya tengo el archivo</Radio>
                </Space>\
            </Radio.Group>
          </div>
          {/*  FIN Realidad aumentada*/}

          <div className="flex items-center justify-center">
            <button className="p-4 rounded-lg bg-[#8B11EF] text-[#ffffff] ">
              siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProductForm;
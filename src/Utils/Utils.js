import { PlusOutlined } from '@ant-design/icons';

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

  export const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  export const emailRegexValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export const data = [
    {
      id: 1,
      key: '1',
      name: "Cargar modelo 3D",
      description: "Cargar a la plataforma un modelo 3D ",
      link: '/NewProductPage'
    },
    {
      id: 2,
      key: 2,
      name: "Solicitudes",
      description: "Ver solicitudes de fotogrametría y evaluar modelos 3D",
      link: '/ModelsRequest'
    },
    {
      id: 3,
      key: 3,
      name: "Nueva empresa",
      description: "Agregar nuevo usuario vendedor",
      link: '/NewSellerForm'
    },
    {
      id: 4,
      key: 4,
      name: "Vendedores",
      description: "Ver tabla con datos de cada vendedor registrado",
      link: '/SellerManagement'
    },
    {
      id: 5,
      key: 5,
      name: "Métricas",
      description: "Acceso a Google Analytics",
      link: '/Analytics'
    },
    ]
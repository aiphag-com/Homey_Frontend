import { PlusOutlined } from "@ant-design/icons";

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

export const emailRegexValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const data = [
  {
    id: 1,
    key: 1,
    name: "Cargar modelo 3D",
    description: "Cargar a la plataforma un modelo 3D ",
    link: "/ModelsRequest",
  },
  {
    id: 2,
    key: 2,
    name: "Solicitudes",
    description: "Ver solicitudes de fotogrametría y evaluar modelos 3D",
    link: "/ModelsRequest",
  },
  {
    id: 3,
    key: 3,
    name: "Nueva empresa",
    description: "Agregar nuevo usuario vendedor",
    link: "/NewSellerForm",
  },
  {
    id: 4,
    key: 4,
    name: "Vendedores",
    description: "Ver tabla con datos de cada vendedor registrado",
    link: "/SellerManagement",
  },
  {
    id: 5,
    key: 5,
    name: "Métricas",
    description: "Acceso a Google Analytics",
    link: "/Analytics",
  },
];

export const category = [
  {
    id: "0",
    key: "0",
    name: "Comedor",
    subCategory: [
      {
        id: "8",
        key: "8",
        name: "Mesas",
      },
      {
        id: "9",
        key: "9",
        name: "Sillas",
      },
      {
        id: "10",
        key: "10",
        name: "Banquetas",
      },
      {
        id: "11",
        key: "11",
        name: "Vajilleros",
      },
    ],
  },
  {
    id: "1",
    key: "1",
    name: "Living",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Sillones",
      },
      {
        id: "1",
        key: "1",
        name: "Sofa",
      },
      {
        id: "2",
        key: "2",
        name: "Rack TV",
      },
      {
        id: "3",
        key: "3",
        name: "Mesas Ratonas",
      },
      {
        id: "4",
        key: "4",
        name: "Recibidores",
      },
      {
        id: "5",
        key: "5",
        name: "Percheros y Revisteros",
      },
    ],
  },
  {
    id: "2",
    key: "2",
    name: "Dormitorio",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Camas",
      },
      {
        id: "1",
        key: "1",
        name: "Mesas de luz",
      },
      {
        id: "2",
        key: "2",
        name: "Guardaropas",
      },
      {
        id: "3",
        key: "3",
        name: "Comodas y Modulares",
      },
    ],
  },
  {
    id: "3",
    key: "3",
    name: "Estudio",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Bibliotecas",
      },
      {
        id: "1",
        key: "1",
        name: "Escritorios",
      },
      {
        id: "2",
        key: "2",
        name: "Sillas de oficina",
      },
    ],
  },
  {
    id: "4",
    key: "4",
    name: "Decoracion",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Cuadros",
      },
      {
        id: "1",
        key: "1",
        name: "Espejos",
      },
      {
        id: "2",
        key: "2",
        name: "Accesorios",
      },
      {
        id: "3",
        key: "3",
        name: "Alfombras",
      },
      {
        id: "4",
        key: "4",
        name: "Almohadas y Almohadones",
      },
      {
        id: "5",
        key: "5",
        name: "Biombos",
      },
      {
        id: "6",
        key: "6",
        name: "Relojes y Estructuras",
      },
    ],
  },
  {
    id: "5",
    key: "5",
    name: "Luminaria",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Lamparas de pie",
      },
      {
        id: "1",
        key: "1",
        name: "Lamparas de techo",
      },
      {
        id: "2",
        key: "2",
        name: "Veladores",
      },
    ],
  },
  {
    id: "6",
    key: "6",
    name: "Exterior",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Mesas de jardin",
      },
      {
        id: "1",
        key: "1",
        name: "Sillas de jardin",
      },
      {
        id: "2",
        key: "2",
        name: "Sillones de jardin",
      },
      {
        id: "3",
        key: "3",
        name: "Reposeras",
      },
      {
        id: "4",
        key: "4",
        name: "Bancos",
      },
      {
        id: "5",
        key: "5",
        name: "Parrilas/Asadores",
      },
      {
        id: "6",
        key: "6",
        name: "Hamacas",
      },
    ],
  },
  {
    id: "7",
    key: "7",
    name: "Niños",
    subCategory: [
      {
        id: "0",
        key: "0",
        name: "Biliotecas y repisas",
      },
      {
        id: "1",
        key: "1",
        name: "Canastos",
      },
      {
        id: "2",
        key: "2",
        name: "Cunas y Camas",
      },
      {
        id: "3",
        key: "3",
        name: "Muebles de juego",
      },
    ],
  },
];

export const profiles = [
  {
    id: 1,
    key: 1,
    name: "A1",
    price: "999",
    image: " ",
    status: "Sin Stock",
  },
  {
    id: 1,
    key: 1,
    name: "A1",
    price: "999",
    image: " ",
    status: "Procesando",
  },
  {
    id: 1,
    key: 1,
    name: "A1",
    price: "999",
    image: " ",
    status: "Pausada",
  },
  {
    id: 1,
    key: 1,
    name: "A1",
    price: "999",
    image: " ",
    status: "Listo",
  },
];

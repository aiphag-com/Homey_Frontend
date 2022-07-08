import {
  ShopOutlined,
  TagOutlined,
  SettingOutlined,
  InboxOutlined,
  ShoppingOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Mi negocio", "sub1", <ShopOutlined />, [
    getItem("", "g1", null, [getItem("Metricas", "1")], "group"),
  ]),
  getItem("Ventas", "sub2", <TagOutlined />, [
    getItem(
      "",
      "g2",
      null,
      [getItem("Acordar entregas", "2"), getItem("Historial de ventas", "3")],
      "group"
    ),
  ]),
  getItem("Productos", "sub3", <ShoppingOutlined />, [
    getItem(
      "",
      "g3",
      null,
      [getItem("Cargar nuevo producto", "4", <PlusOutlined/>), getItem("Catalogo", "5")],
      "group"
    ),
  ]),
  getItem("Preguntas", "6", <InboxOutlined />),

  getItem("Configuracion", "sub5", <SettingOutlined />, [
    getItem(
      "",
      "g5",
      null,
      [getItem("Editar perfil", "7"), getItem("Seguridad y clave", "8")],
      "group"
    ),
  ]),
];

const SellerMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const result = data.filter((item) => item.key === e.key);
    navigate(result[0].link);
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      className="font-poppins"
      style={{
        width: 350,
        borderColor: "transparent"
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

const data = [
  {
    key: "1",
    link: "/Analitycs"
  },
  {
    key: "2",
    link: "/Deliveries"
  },
  {
    key: "3",
    link: "/Register"
  },
  {
    key: "4",
    link: "/NewProductPage"
  },
  {
    key: "5",
    link: "/CataloguePage"
  },
  {
    key: "6",
    link: "/CatalogueQuestions"
  },
  {
    key: "7",
    link: "/EditProfile"
  },
  {
    key: "8",
    link: "/Security"
  },
]

export default SellerMenu;

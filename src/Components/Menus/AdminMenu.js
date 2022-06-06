import {
  LineChartOutlined,
  CodeSandboxOutlined,
  ShopOutlined,
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
  getItem("Empresas", "sub1", <ShopOutlined />, [
    getItem(
      "",
      "g1",
      null,
      [getItem("Cargar nueva empresa", "1"), getItem("Vendedores", "2")],
      "group"
    ),
  ]),
  getItem("Modelos 3D", "sub2", <CodeSandboxOutlined />, [
    getItem(
      "",
      "g2",
      null,
      [
        getItem("Solicitudes", "3"),
        getItem("En proceso", "4"),
        getItem("Modelos 3D", "5"),
        getItem("Historial", "6"),
      ],
      "group"
    ),
  ]),
  getItem("Analytics", "sub3", <LineChartOutlined />, [
    getItem(
      "",
      "g3",
      null,
      [getItem("Comprador", "7"), getItem("Vendedor", "8")],
      "group"
    ),
  ]),
];

const data = [
  {
    key: "1",
    link: "/NewSellerForm",
  },
  {
    key: "2",
    link: "/SellerManagement",
  },
  {
    key: "3",
    link: "/ModelsRequest",
  },
  {
    key: "4",
    link: "/ModelsPaused",
  },
  {
    key: "5",
    link: "/ModelsHabilited",
  },
  {
    key: "6",
    link: "/ModelsHistory",
  },
  {
    key: "7",
    link: "/BuyerAnalytics",
  },
  {
    key: "8",
    link: "/SellerAnalytics",
  },
];

const AdminMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const result = data.filter((item) => item.key === e.key);
    navigate(result[0].link);
  };

  return (
    <Menu
      onClick={onClick}
      className=" font-poppins"
      style={{
        width: 350,
        borderColor: "transparent",
      }}
      mode="inline"
      items={items}
    />
  );
};

export default AdminMenu;

import React from "react";
import { Pagination, Table, Tag } from "antd";

const columns = [
  {
    title: "Nombre Empresa",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Zona",
    dataIndex: "zona",
    key: "zona",
  },
  {
    title: "Antiguedad",
    dataIndex: "antiguedad",
    key: "antiguedad",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Cant. Ventas",
    dataIndex: "cantidadVentas",
    key: "address",
  },
];

const data = [
  {
    key: "1",
    name: "Company 1",
    zona: "Ciudad1",
    antiguedad: "6 meses",                                  // hacer funcion calcularAntiguedad
    tags: ["Mesas", "Sillas"],
    cantidadVentas: "999",
  },
  {
    key: "2",
    name: "Company 2",
    zona: "Ciudad2",
    antiguedad: "2 meses",                                  // hacer funcion calcularAntiguedad
    tags: ["Sillones"],
    cantidadVentas: "999",
  },
  {
    key: "3",
    name: "Company 3",
    zona: "Ciudad3",
    antiguedad: "11 meses",                                  // hacer funcion calcularAntiguedad
    tags: ["Escritorios"],
    cantidadVentas: "2",
  },
];

const App = () => {
    return (
        <div>
            <div>
                <p>BUSCAR VENDEDOR X NOMBRE</p>
            </div>

            <Table columns={columns} dataSource={data} />

            <div className="flex">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default App;

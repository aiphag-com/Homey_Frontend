import React from "react";
import { Pagination, Table, Tag, Input } from "antd";
const { Search } = Input;

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
    antiguedad: "6 meses", // hacer funcion calcularAntiguedad
    tags: ["Mesas", "Sillas"],
    cantidadVentas: "999",
  },
  {
    key: "2",
    name: "Company 2",
    zona: "Ciudad2",
    antiguedad: "2 meses", // hacer funcion calcularAntiguedad
    tags: ["Sillones"],
    cantidadVentas: "999",
  },
  {
    key: "3",
    name: "Company 3",
    zona: "Ciudad3",
    antiguedad: "11 meses", // hacer funcion calcularAntiguedad
    tags: ["Escritorios"],
    cantidadVentas: "2",
  },
];


const onSearch = (value) => console.log(value);

const SellerManagement = () => {
  return (
      <div>

        <div id="busqueda" className="flex p-8">
          <Search
            placeholder="buscar vendedor"
            onSearch={onSearch}
            style={{
              width: '50%',
            }}
          />
        </div>

        <div id="tablas" className="flex flex-col items-center align-middle">
          <Table className="mb-14 w-full " columns={columns} dataSource={data} size={'big'} pagination={false}/>
          <Pagination defaultCurrent={1} total={30} />
        </div>

      </div>
  );
};

export default SellerManagement;

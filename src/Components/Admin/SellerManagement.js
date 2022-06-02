import React from "react";
import { Table, Tag, Input } from "antd";
const { Search } = Input;

const columns = [
  {
    title: "Nombre Empresa",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="/sellermanagement">{text}</a>,
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
    tags: ["TAG1", "TAG2"],
    cantidadVentas: "999",
  },
  {
    key: "2",
    name: "Company 2",
    zona: "Ciudad2",
    antiguedad: "2 meses", // hacer funcion calcularAntiguedad
    tags: ["TAG1", "TAG2"],
    cantidadVentas: "999",
  },
  {
    key: "3",
    name: "Company 3",
    zona: "Ciudad3",
    antiguedad: "11 meses", // hacer funcion calcularAntiguedad
    tags: ["TAG1", "TAG2"],
    cantidadVentas: "2",
  },
];

const onSearch = (value) => console.log(value);

const SellerManagement = () => {
  return (
    <div className="flex flex-col justify-center font-poppins w-screen">
      <div id="busqueda" className="p-4 ">
        <Search
          className="bg-[#fff1] font-poppins "
          placeholder="buscar vendedor"
          onSearch={onSearch}
          bordered
          size="large"
          style={{
            width: "20%",
          }}
        />
      </div>

      <div id="tablas" className=" ">
        <Table
          className="mb-14 w-full font-poppins p-2"
          columns={columns}
          dataSource={data}
          size={"small"}
          pagination={{position:["bottomCenter"]}}
          bordered
        />
      </div>
    </div>
  );
};

export default SellerManagement;

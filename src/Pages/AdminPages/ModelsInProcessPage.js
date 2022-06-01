import { Button, Space, Table } from "antd";
import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";

const readName = (nameSet) => {
  //console.log(nameSet.user_name);
  console.log(columns[0].dataIndex);
}

const columns = [
  {
    //title: "Usuario",
    dataIndex: "user_name",
    key: "user_Name",
  },
  {
    //title: "Producto",
    dataIndex: "product_name",
    key: "product_Name",
  },
  {
    //title: "Action 1",
    dataIndex: "action_one",
    key: "action_One",
    render: () => (
      <Space size="middle">
        <Button
        disabled
        style={{
          borderRadius: 7,
          borderColor: "#b1b1b1"
        }}
        > Ver Evaluacion </Button>
      </Space>
    ),
  },
  {
    //title: "Action 2",
    dataIndex: "action_open",
    key: "action_Open",
    render: (_,nameSet) => (
      <Space size="middle">
        <Button
          onClick={readName(nameSet)}
          style
          ={{
            borderRadius: 7,
            borderColor: "transparent",
          }}
        >
          {" "}
          Abrir{" "}
        </Button>
      </Space>
    ),
  },
  {
    //title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

const dataSource = [
  {
    key: "1",
    user_name: "Empresa 1",
    product_name: "Mueble 1",
    action_one: "Placeholder btn",
    action_open: "Placeholder btn",
    date: "2022-6-1 00:00:00",
  },
  {
    key: "2",
    user_name: "Empresa 2",
    product_name: "Mueble 2",
    date: "2022-6-1 00:00:00",
  },
  {
    key: "3",
    user_name: "Empresa 3",
    product_name: "Mueble 3",
    date: "2022-6-1 00:00:00",
  },
  {
    key: "4",
    user_name: "Empresa 4",
    product_name: "Mueble 4",
    date: "2022-6-1 00:00:00",
  },
  {
    key: "5",
    user_name: "Empresa 5",
    product_name: "Mueble 5",
    date: "2022-6-1 00:00:00",
  },
];

// aca tiene que ser un .map que solo se use una tarjeta y se pase la info por props
const ModelInProgress = () => {
  return (
    <>
      <div className="grid grid-cols-2 font-poppins font-bold">
        {/* <AdminDashboardCard /> */}
      </div>

      <div className="flex flex-col font-poppins bg-primaryI p-2">
        <p className="font-bold text-2xl">Pulicaciones Pausadas</p>
        <p className="text-xl mb-[90px]">Subtitulo</p>

        <div className="p-4">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{
              x: 500,
              y: 300,
            }}
          ></Table>

        </div>
      </div>
    </>
  );
};

export default ModelInProgress;

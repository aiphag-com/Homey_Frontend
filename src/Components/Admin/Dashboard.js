import { Table } from "antd";
import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";

const columns = [
  {
    title: "Usuario",
    dataIndex: "user_name",
    key: "user_Name",
  },
  {
    title: "Producto",
    dataIndex: "product_name",
    key: "product_Name",
  },
  {
    title: "Action 1",
    dataIndex: "action_one",
    key: "action_One",
  },
  {
    title: "Action 2",
    dataIndex: "action_open",
    key: "action_Open",
  },
  {
    title: "Date",
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
    date: '2014-12-24 23:12:00'
  },
  {
    key: "2",
    user_name: "Empresa 2",
    product_name: "Mueble 2",
    action_one: "Placeholder btn",
    action_open: "Placeholder btn",
    date: '2014-12-24 23:12:00'
  },
  {
    key: "1",
    user_name: "Empresa 1",
    product_name: "Mueble 1",
    action_one: "Placeholder btn",
    action_open: "Placeholder btn",
    date: '2014-12-24 23:12:00'
  },
  {
    key: "1",
    user_name: "Empresa 1",
    product_name: "Mueble 1",
    action_one: "Placeholder btn",
    action_open: "Placeholder btn",
    date: '2014-12-24 23:12:00'
  },
  {
    key: "1",
    user_name: "Empresa 1",
    product_name: "Mueble 1",
    action_one: "Placeholder btn",
    action_open: "Placeholder btn",
    date: '2014-12-24 23:12:00'
  },
];

// aca tiene que ser un .map que solo se use una tarjeta y se pase la info por props
const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 font-poppins font-bold">
        {/* <AdminDashboardCard /> */}
      </div>

      <div className="flex flex-col font-poppins">
        <p className="font-bold text-2xl mb-[90px]">Pulicaciones Pausadas</p>
        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: 750,
            y: 200,
          }}
        ></Table>
      </div>
    </>
  );
};

export default AdminDashboard;

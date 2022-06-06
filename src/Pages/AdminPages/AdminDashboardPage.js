import React from "react";
import AdminDashboard from "../../Components/Admin/Dashboard";
import HeaderAdm from "../../Components/Base/HeaderAdmin";
import AdminMenu from "../../Components/Menus/AdminMenu";

const AdminDashboardPage = () => {
  return (
    <>
      <HeaderAdm />
      <div className="flex">
        <AdminMenu />
        <AdminDashboard />
      </div>
    </>
  );
};

export default AdminDashboardPage;

import React from "react";
import AdminDashboard from "../../Components/Admin/Dashboard";
import Header from "../../Components/Base/Header";
import AdminMenu from "../../Components/Menus/AdminMenu";

const AdminDashboardPage = () => {

  return (
    <>
      <Header />
      <div className="flex">
        <AdminMenu />
        <AdminDashboard />
      </div>
    </>
  );
}

export default AdminDashboardPage;
import React from "react";
import SellerManagement from "../../Components/Admin/SellerManagement";
import HeaderAdm from "../../Components/Base/HeaderAdmin";
import AdminMenu from "../../Components/Menus/AdminMenu";

const SellerManagementPage = () => {
  return (
    <>
      <HeaderAdm />
      <div className="flex">
        <AdminMenu />
        <SellerManagement />
      </div>
    </>
  );
};

export default SellerManagementPage;

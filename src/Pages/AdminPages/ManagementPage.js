import React from "react";
import Management from "../../Components/Admin/SellerManagement";
import HeaderAdm from "../../Components/Base/HeaderAdmin";
import AdminMenu from "../../Components/Menus/AdminMenu";

const SellerManagementPage = () => {
  return (
    <>
      <HeaderAdm />
      <div className="flex">
        <AdminMenu />
        <Management />
      </div>
    </>
  );
};

export default SellerManagementPage;

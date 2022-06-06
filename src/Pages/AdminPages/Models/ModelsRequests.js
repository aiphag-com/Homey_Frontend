import React from "react";
import RequestModel from "../../../Components/Admin/ModelsThree/RequestModel";
import HeaderAdmin from "../../../Components/Base/HeaderAdmin";
import AdminMenu from "../../../Components/Menus/AdminMenu";

const ModelsRequest = () => {

  return (
    <>
      <HeaderAdmin />
      <div className="flex">
        <AdminMenu/>
        <RequestModel />
      </div>
    </>
  );
}

export default ModelsRequest;
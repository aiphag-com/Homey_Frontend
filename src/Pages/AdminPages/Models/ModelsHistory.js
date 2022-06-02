import React from "react";
import HistoryModel from "../../../Components/Admin/ModelsThree/HistoryModel";
import HeaderAdmin from "../../../Components/Base/HeaderAdmin";
import AdminMenu from "../../../Components/Menus/AdminMenu";

const ModelsHistory = () => {

  return (
    <>
      <HeaderAdmin />
      <div className="flex">
        <AdminMenu />
        <HistoryModel />
        </div>
    </>
  );
}

export default ModelsHistory;
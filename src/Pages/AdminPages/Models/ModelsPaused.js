import React from "react";
import PausedModel from "../../../Components/Admin/ModelsThree/PausedModel";
import HeaderAdmin from "../../../Components/Base/HeaderAdmin";
import AdminMenu from "../../../Components/Menus/AdminMenu";

const ModelPaused = () => {

  return (
    <>
      <HeaderAdmin />
      <div className="flex">
        <AdminMenu/>
        <PausedModel />
      </div>
    </>
  );
}

export default ModelPaused;
import React from "react";
import HabilitedModel from "../../../Components/Admin/ModelsThree/HabilitedModel";
import HeaderAdmin from "../../../Components/Base/HeaderAdmin";
import AdminMenu from "../../../Components/Menus/AdminMenu";

const ModelsHabilited = () => {

  return (
    <>
      <HeaderAdmin />
      <div className="flex">
        <AdminMenu />
        <HabilitedModel />
        </div>
    </>
  );
}

export default ModelsHabilited;
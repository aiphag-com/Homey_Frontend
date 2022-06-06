import React from "react";
import HeaderAdm from "../../Components/Base/HeaderAdmin";
import AdminMenu from "../../Components/Menus/AdminMenu";

const BuyerAnalytics = () => {

  return (
    <>
      <HeaderAdm />
      <div className="flex">
        <AdminMenu />
        <p>Aca vienen las metricas del vendedor!</p>
      </div>
    </>
  );
}

export default BuyerAnalytics;
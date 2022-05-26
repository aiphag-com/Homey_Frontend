import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";
import SellerDashboard from "../../Components/Seller/SellerDashboard";

const SellerDashboardPage = () => {

    return (
        <>
          <Header />
          <div className="flex">
          <SellerMenu />
          <SellerDashboard />
          </div>
        </>
    );
}

export default SellerDashboardPage;
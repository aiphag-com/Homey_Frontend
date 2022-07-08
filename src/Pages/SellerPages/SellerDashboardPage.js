import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";
import SellerCatalogue from "../../Components/Seller/Catalogue/Catalogue";


const SellerDashboardPage = () => {

    return (
        <>
          <Header />
          <div className="flex">
          <SellerMenu />
          <SellerCatalogue />
          </div>
        </>
    );
}

export default SellerDashboardPage;
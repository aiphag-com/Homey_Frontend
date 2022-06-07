import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";


const CataloguePage = () => {

    return (
        <>
          <Header />
          <div className="flex">
          <SellerMenu />

          </div>
        </>
    );
}

export default CataloguePage;
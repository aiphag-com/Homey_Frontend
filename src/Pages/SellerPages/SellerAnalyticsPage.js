import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const SellerAnalyticsPage = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> ACA VIENEN LAS ANALITICAS! </p>
        </div>
        </>
    )
}

export default SellerAnalyticsPage;
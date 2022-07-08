import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const Deliveries = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> ACORDAR ENTREGAS </p>
        </div>
        </>
    )
}

export default Deliveries;
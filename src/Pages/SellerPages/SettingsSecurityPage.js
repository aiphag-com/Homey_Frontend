import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const SettingsSecurityPage = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> SEGURIDAD Y CLAVE </p>
        </div>
        </>
    )
}

export default SettingsSecurityPage;
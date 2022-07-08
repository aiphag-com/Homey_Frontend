import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const SettingsEditProfilePage = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> EDITAR PERFIL SELLER </p>
        </div>
        </>
    )
}

export default SettingsEditProfilePage;
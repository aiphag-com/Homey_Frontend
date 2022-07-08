import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const Register = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> HISTORIAL DE VENTAS </p>
        </div>
        </>
    )
}

export default Register;
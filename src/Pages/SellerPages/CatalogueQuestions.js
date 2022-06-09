import React from "react";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu";

const CatalogueQuestions = () => {
    return (
        <>
        <Header/>
        <div className="flex">
            <SellerMenu/>
            <p> PREGUNTAS AL CATALOGO </p>
        </div>
        </>
    )
}

export default CatalogueQuestions;
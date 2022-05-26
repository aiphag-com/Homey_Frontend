import { Button } from "antd";
import React from "react";
import BoxNewProduct from "../Components/Forms/BoxNewProduct";
import NewProductForm from "../Components/Forms/NewProductForm";
import Header from "../Components/Base/Header";

const NewProductPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <NewProductForm />
        <div className="mx-4" />
        <div className="flex flex-col items-center justify-center">
        <BoxNewProduct />
        <Button type="primary" shape="round"  className="mt-4">
          Siguiente
        </Button>
        </div>
      </div>
    </>
  )
}

export default NewProductPage;
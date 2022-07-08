import React, { useState } from "react";
import BoxNewProduct from "../../Components/Forms/BoxNewProduct";
import NewProductForm from "../../Components/Forms/NewProductForm";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu"
import BoxSucessProduct from "../../Components/Forms/BoxSucessProduct";

const NewProductPage = () => {
  const [count, setCount] = useState(1);
  const [form, setForm] = useState({
    name: "",
    hasPrice: true,
    price: "",
    description: "",
    category: "",
    subcategory: "",
    hasStock: false,
    picture: [],
    render: true,
    renderFile: []
  });

  return (
    <>
      <Header />
      <div className="flex">
        <SellerMenu form={form}/>
        <div className="flex justify-center items-center font-poppins h-100 w-screen">

          {count === 1 ? (
            <NewProductForm setCount={setCount} setForm={setForm} form={form} />
          ) : null
          }
          
          {count === 2 ? (
            <BoxNewProduct setCount={setCount} setForm={setForm} form={form} />
          ) : null
          }

          {count === 3 ? (
            <BoxSucessProduct setCount={setCount}/>
          ) : null
          }
          
        </div>
      </div>
    </>
  )
}

export default NewProductPage;
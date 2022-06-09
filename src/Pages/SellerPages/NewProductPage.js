import React, { useState } from "react";
import BoxNewProduct from "../../Components/Forms/BoxNewProduct";
import NewProductForm from "../../Components/Forms/NewProductForm";
import Header from "../../Components/Base/Header";
import SellerMenu from "../../Components/Menus/SellerMenu"

const NewProductPage = () => {
  const [count, setCount] = useState(1);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    telefono: "",
    cvu: "",
    // {/*cambiar nombre de variables*/}
  });
  console.log(form);
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
          <BoxNewProduct />
          ) : null
          }

          {count === 3 ? (
          <p>OCOTE</p>
          ) : null
          }
        </div>
      </div>
    </>
  )
}

export default NewProductPage;
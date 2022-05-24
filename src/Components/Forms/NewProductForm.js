import React, { useState } from "react";
import { Input } from 'antd';


const  NewProductForm = () => {
  const [form, setForm] = useState({
    cuit: "",
    direccion: "",
    cp: "",
    email: "",
    telefono: "",
    cvu:"",
  });
  const [count, setCount] = useState(1);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-3/6 h-3/6">
                <p>CUIT</p>
                <Input placeholder="Basic usage" />
                <p>Domicilio de facturación</p>
                <p>Dirección</p>
                <Input placeholder="Basic usage" />
                <div>
                <p>Mail de contacto</p>
                <Input placeholder="Basic usage" />
                <p>CP</p>
                <Input placeholder="Basic usage" />
                </div>
                <div>
                <p>Teléfono</p>
                <Input placeholder="Basic usage" />
                <Input placeholder="Basic usage" />
                </div>
        </div>
    </>
  );
}

export default NewProductForm;
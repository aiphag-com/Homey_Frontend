import React, { useState } from "react";

const  NewSellerForm = () => {
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

  console.log(form);

  return (
    <>
      <div className="seller_main">
        <div className="seller_main_container">

          <h1 className="font__title">Step {count} of 3</h1>
          <div className="seller_container">
            <form onSubmit={() => alert(`Submited thing: ${form.email}`)}>
              {count === 1 ? (
                <div className="load_seller_container">
                  <label>Crear una cuenta de empresa</label>
                  <label className="font__title">
                    {" "}
                    1. Carga datos de la empresa
                    {" "}
                  </label>

                  <label> CUIT </label>
                  <div className="seller_input-container">
                    <input
                      className="seller_input"
                      placeholder="xx-xxxxxxx-x"
                      onChange={updateForm}
                      name="cuit"
                      value={form.cuit}
                    />
                  </div>
                  <br/>

                  <label> Domicilio de facturacion </label>

                  <div>
                    <div className="seller_direction-container">
                      <label className="font__small"> Direccion </label>
                      <div className="seller_input-container_small">
                        <input
                        className="seller_input_small"
                        placeholder="address" 
                        onChange={updateForm}
                        name="direccion"
                        value={form.direccion}
                        />
                      </div>
                    </div>

                    <div className="seller_direction-container">
                      <label className="font__small"> CP </label>
                      <div className="seller_input-container_small">
                        <input
                        className="seller_input_small"
                        placeholder="xxxx"
                        onChange={updateForm}
                        name="cp"
                        value={form.cp}
                        />

                      </div>
                    </div>
                  </div>
                  
                  <br/>
                  <label> Mail de contacto </label>
                  <div className="seller_input-container">
                    <input
                    className="seller_input"
                    placeholder="empresa@mail"
                    onChange={updateForm}
                    name="email"
                    value={form.email}
                    />
                  </div>

                  <br/>
                  <label> Telefono </label>
                  <div className="seller_input-container">
                    <input
                    className="seller_input"
                    type="tel"
                    pattern="[0-9] {5}"
                    placeholder="xx-xxx-xx-xxxxxxx"
                    onChange={updateForm}
                    name="telefono"
                    value={form.telefono}
                    />
                  </div>
                </div>
              ) : null}

              {count === 2 ? (
                <div className="load_seller_container">
                  <label>Escribe datos bancarios</label>
                  <label className="font__title">
                    {" "}
                    2. Asociar con Mercadopago
                    {" "}
                  </label>

                  <label> CVU </label>
                  <div className="seller_input-container">
                    <input
                      className="seller_input"
                      type="number"
                      placeholder="xxx-xxxx-xxxx"
                      min={0}
                      onChange={updateForm}
                      name="cvu"
                      value={form.cvu}
                    />
                  </div>

                  <div>
                    <span className="seller_container_like seller_like_logo">
                      {/* <Icon icon={check} size={50}/>
                      <Icon icon={x} size={50}/> */}
                    </span>

                    <br/>
                    <div className="seller_container_like">
                      <label className="font_quad">Empresa SAS</label>
                    </div>

                    <br/>
                    <div className="seller_container_like">
                      <label className="font_quad">CUIT/CUIL: </label>
                    </div>
                    <label className="font__terciary">(Numero de cuil)</label>

                    <br/>
                    <div className="seller_container_like">
                      <label className="font_quad">Alias: </label>
                    </div>
                    <label className="font__terciary">(Nombre del alias)</label>

                    <br/>
                  </div>
                </div>
              ) : null}

              {count === 3 ? (
                <div className="load_seller_container">

                  <br/>
                  <span className="seller_container_like seller_like_logo">
                    {/* <Icon icon={thumbsUp} size={75}/> */}
                  </span>
                  <br/>

                  <div className="seller_container_like">
                    <label className="font_title">se ha generado una cuenta empresa para:</label>
                  </div>

                  <label className="font__quad">(Nombre empresa)</label>

                  <div className="seller_container_like">
                    <label>Se ha enviado un correo eletronico con usuario y clave a la direccion de correo de contacto cargado.</label>
                  </div>
                  
                  <br/>
                </div>
              ) : null}
            </form>

            <br/>
            <div className="seller_buttons-container">
            {count === 3 ? 
            <button
                  className="btn-back"
                  id="btn-back"
                  type="submit"
                  onClick={() => setCount(count - 1)}
                  disabled={count < 2}
                >
                 Cargar una nueva
                </button> : (
              <><button
                  className="btn-back"
                  id="btn-back"
                  type="submit"
                  onClick={() => setCount(count - 1)}
                  disabled={count < 2}
                >
                  Back
                </button>
                <button
                  className="btn-next"
                  type="submit"
                  onClick={() => setCount(count + 1)}
                  disabled={count > 2}
                >
                    Next
                  </button></>)
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSellerForm;
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import CarouselComponent from './Carousel';

export const LocalizedModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleOk = () => {
    hideModal();
  };

  const handleCancel = () => {
    hideModal();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        footer={[
          <div className='flex justify-center'>
            <Button 
            onClick={handleCancel} 
            danger
            style={{borderRadius: 7, borderColor: "red", color: "red"}} 
            > Pausar </Button>

            <Button 
            onClick={handleOk} 
            style={{borderRadius: 7, borderColor: "green", color: "green"}}
            > Habilitar </Button>
          </div>
        ]}
      >
        <div className="grid grid-cols-2">
          <div>
            <a href='/error' name="Manufacturer"> Empresa </a>
            <p name="ProductName" className='font-bold'>NOMBRE DEL PRODUCTO </p>
            <p name="ProuctDescription"> descripcion del producto </p>
            <p className='font-bold'>MEDIDAS</p>
            <p name="ProductDimentions"> 999cm x 999cm </p>
          </div>
          <div className='mt-10'>
            <CarouselComponent />

            <Button
              type="primary"
              size="large"
              block
              style={{
                background: "#9254DE",
                height: 50,
                color: "white",
                borderRadius: 7,
                borderColor: "transparent",
              }}
            >
              Descargar Modelo 3D
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

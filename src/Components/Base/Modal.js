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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Habilitar"
        cancelText="Pausar"
      >
        <div className="grid grid-cols-2">
          <div>
          aca va todo el lado izquierdo el texto
          </div>
          <div className='mt-10'>
            <CarouselComponent />
            <Button type="primary" >
            Descargar modelo 3D
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

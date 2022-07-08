import React, { useEffect, useState } from 'react';
import { Modal, Button, Skeleton, Alert } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewProductForm from '../../../Forms/NewProductForm';

export const ProccesProductModal = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleOk = () => {
    hideModal();
  };
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        width={750}
        centered
        footer={false}
      >
      <div className="grid grid-cols-2 gap-48">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Mesa laqueada</h5>
      <div className="text-[#237804] bg-[#D9F7BE] rounded-full p-4 w-60 h-8 flex justify-center items-center">
            <p className="mt-4 ">Procesando dd/mm/yyy</p>
      </div>
      </div>

      <Alert
      message="La publicación está siendo procesada"
      description="Descarga los requisitos que deben cumplir los modelos 3D para ser publicados"
      type="info"
      showIcon
      closable={false}
    />

      <div className="flex justify-center items-center font-poppins h-100 mt-4">
        <div className="w-[37.5rem]	h-96	overflow-auto border border-[#8c8c8c]"
          id="scrollableDiv">
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 10}
            loader={<Skeleton avatar paragraph={{ rows: 1, }} active />}
            scrollableTarget="scrollableDiv"
          >
          <NewProductForm />
          </InfiniteScroll>
        </div>
        </div>
      </Modal>
    </>
  );
};

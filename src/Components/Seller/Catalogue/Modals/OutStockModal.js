import React, { useEffect, useState } from 'react';
import { Modal, Button, Skeleton, Alert } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewProductForm from '../../../Forms/NewProductForm';

export const OutStockModal = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
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
        <div className="grid grid-cols-2 gap-96">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Taburete Frida</h5>
          <div className="bg-[#f5f5f5] rounded-full p-4 w-32 h-8 flex justify-center items-center">
            <p className="mt-4 ">Sin stock</p>
          </div>
        </div>

        <Alert
          message="Item publicado"
          description="Los clientes pueden ver el producto, comentar y solicitar presupuesto. ¿Quieres volver a ofertar? Elige ofertar."
          type="info"
          showIcon
          closable={false}
        />

        <div className="flex flex-col justify-center items-center font-poppins h-100 mt-4">
          <Button
            style={{ borderRadius: 7, borderColor: "#FFE58F", color: "#874D00", backgroundColor: "transparent" }}
          >Ofertar</Button>
        </div>

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

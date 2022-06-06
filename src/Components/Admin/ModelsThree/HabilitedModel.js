import React, { useState, useEffect } from 'react';
import { List, Avatar, Skeleton, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EyeTwoTone, MoreOutlined } from "@ant-design/icons";

const HabilitedModel = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
    <div
      className="w-full mx-10">
    <div className="flex flex-col font-poppins p-4">
        <div className=" text-2xl font-bold ">Modelos 3D habilitados</div>
        <div className=" text-l text-[#696969] font-thin">
        Archivos listos para ser integrados a los catálogos de la plataforma
        </div>
      </div>
      <div
             style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
       id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 10}
        loader={<Skeleton avatar paragraph={{rows: 1, }} active /> }
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
        <List.Item
          actions={[<Button ghost  icon={<EyeTwoTone />}/>, <Button type="text" shape="round" icon={<MoreOutlined  />}/>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<p>{item.name?.last}</p>}
              description="Silla exterior Sling de madera laquada"
            />
            <div className="text-red-900"> 
            <Button  style={{ color: "#722ed1"}} type="text">Marcar en proceso</Button> </div>
          </Skeleton>
        </List.Item>
      )}
        />
      </InfiniteScroll>
    </div>
    </div>
    </>
  );
};
export default HabilitedModel;
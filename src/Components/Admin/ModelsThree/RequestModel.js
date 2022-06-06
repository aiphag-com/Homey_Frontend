import React, { useState, useEffect } from 'react';
import { List, Avatar, Skeleton, Button, Checkbox } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EyeTwoTone, MoreOutlined } from "@ant-design/icons";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Modelos 3D para evaluar", "Fotogrametria"];
const defaultCheckedList = 'Todo';

const RequestModel = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkAll, setCheckAll] = useState(false);

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

  const onChange = (list) => {
    setCheckedList(list);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setCheckAll(e.target.checked);
  };

  return (
    <>
    <div
      className="w-full mx-10">
    <div className="flex flex-col font-poppins p-4">
        <div className=" text-2xl font-bold "> Solicitudes de Modelos 3D </div>
        <div className=" text-l text-[#696969] font-thin">
          {" "}
          Solicitudes de fotogrametria y evaluacion de modelo 3D{" "}
        </div>

        <div className="flex mt-4">
          <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
          <Checkbox
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            {defaultCheckedList}
          </Checkbox>
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
export default RequestModel;
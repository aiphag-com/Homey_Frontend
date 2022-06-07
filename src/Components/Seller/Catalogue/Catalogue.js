import React, { useEffect, useState } from "react";
import { Avatar, Button, Checkbox, Collapse, Dropdown, Input, List, Menu, Skeleton } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";
import { EyeTwoTone, MoreOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const { Search } = Input;

const SellerCatalogue = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const onSearch = (value) => console.log(value);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const onMenuClick = (e) => {
    console.log('click', e);
  };
  
  const menuButton = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: 'Marcar “Sin stock”',
      },
      {
        key: '2',
        label: 'Editar',
      },
      {
        key: '3',
        label: 'Eliminar del catálogo',
      },
    ]}
  />
);
  return (
    <>
      <div className="w-full mx-10">
      <div className="mb-5">
        <Collapse  defaultActiveKey={false} onChange={onChange}>
          <Panel header="Filtrar búsqueda" key="1">
            <div>
              <Search
                className="bg-[#fff1] font-poppins "
                placeholder="buscar vendedor"
                onSearch={onSearch}
                bordered
                size="large"
                style={{
                  width: "20%",
                }}
              />
              <Checkbox.Group
                style={{
                  width: '100%',
                  margin: '0px'
                }}
                onChange={onChange}
              >
                <div className="grid grid-cols-5 m-5">
                  <Checkbox value="A">Categoria 1</Checkbox>
                  <Checkbox value="B">Categoria 2</Checkbox>
                  <Checkbox value="C">Categoria 3</Checkbox>
                  <Checkbox value="D">Categoria 4</Checkbox>
                  <Checkbox value="E">Categoria 5</Checkbox>
                  <Checkbox value="F">En proceso</Checkbox>
                  <Checkbox value="G">Publicaciones pausadas</Checkbox>
                  <Checkbox value="H">Sin stock</Checkbox>
                  <Checkbox value="I">Todo</Checkbox>
                </div>
              </Checkbox.Group>
            </div>
          </Panel>
        </Collapse>
</div>


        {/* TABLA  DE PRODUCTOS*/}
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
            loader={<Skeleton avatar paragraph={{ rows: 1, }} active />}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  actions={[<Button overlay={menuButton} ghost icon={<EyeTwoTone />} />,
             <Dropdown overlay={menuButton} placement="bottomRight">
               <Button ghost type="text"><MoreOutlined/></Button> 
               </Dropdown>]}
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={<p>{item.name?.last}</p>}
                      description="Silla exterior Sling de madera laquada"
                    />
                    <div className="text-red-900">
                      <Button style={{ color: "#722ed1" }} type="text">Marcar en proceso</Button> </div>
                  </Skeleton>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

export default SellerCatalogue;
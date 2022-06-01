import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Empresas', 'sub1', <MailOutlined />, [
    getItem('', 'g1', null, [getItem('Cargar nueva empresa', '1', ), getItem('Vendedores', '2')], 'group'),
  ]),
  getItem('Modelos 3D', 'sub2', <MailOutlined />, [
    getItem('', 'g2', null, [getItem('Solicitudes', '3'), getItem('Publicaciones pausadas', '4'),  getItem('Modelos 3D habilitados', '5'), getItem('Registro de solicitudes', '6')], 'group'),
  ]),
  getItem('Analytics', 'sub3', <MailOutlined />, [
    getItem('', 'g3', null, [getItem('Comprador', '7'), getItem('Vendedor', '8')], 'group'),
  ]),
];

const data = [
  {
    key: '1',
    link: '/NewSellerForm'
  },
  {
    key: '2',
    link: '/SellerManagement'
  },
  {
    key: '3',
    link: '/SellerManagement'
  },
  {
    key: '4',
    link: '/SellerManagement'
  },
  {
    key: '5',
    link: '/SellerManagement'
  },
  {
    key: '6',
    link: '/SellerManagement'
  },
  {
    key: '7',
    link: '/SellerManagement'
  },
  {
    key: '8',
    link: '/SellerManagement'
  }
  ]

const AdminMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    const result = data.filter(item => item.key === e.key);
    navigate(result[0].link)
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default AdminMenu;
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
    getItem('', 'g1', null, [getItem('Cargar nueva empresa', '1'), getItem('Usuarios vendedores', '2')], 'group'),
  ]),
  getItem('Solicitudes', 'sub2', <MailOutlined />, [
    getItem('', 'g2', null, [getItem('Nuevas de vendedores', '3'), getItem('Pausadas', '4'),  getItem('Habilitadas', '4'), getItem('Registro de solicitudes', '4')], 'group'),
  ]),
  getItem('Analytics', 'sub3', <MailOutlined />)
];

const AdminMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
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
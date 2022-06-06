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
  getItem('Mi negocio', 'sub1', <MailOutlined />, [
    getItem('', 'g1', null, [getItem('Metricas', '1')], 'group'),
  ]),
  getItem('Ventas', 'sub2', <MailOutlined />, [
    getItem('', 'g2', null, [getItem('Acordar entregas', '2'), getItem('Historial de ventas', '3')], 'group'),
  ]),
  getItem('Productos', 'sub3', <MailOutlined />, [
    getItem('', 'g3', null, [getItem('Cargar nuevo producto', '4'), getItem('catalogo', '5')], 'group'),
  ]),
  getItem('Preguntas', 'sub4', <MailOutlined />, [
    getItem('', 'g4', null, [getItem('Sin responder', '5')], 'group'),
  ]),
  getItem('Configuracion', 'sub5', <MailOutlined />, [
    getItem('', 'g5', null, [getItem('Editar perfil empresa', '6'), getItem('Administrar notificaciones', '7'), getItem('Contraseña y seguridad', '8')], 'group'),
  ]),
];

const SellerMenu = () => {
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

export default SellerMenu;
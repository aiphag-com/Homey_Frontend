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
  getItem('Ventas', 'sub1', <MailOutlined />, [
    getItem('', 'g1', null, [getItem('Coordinar envios', '1'), getItem('Historial de ventas', '2')], 'group'),
  ]),
  getItem('Productos', 'sub2', <MailOutlined />, [
    getItem('', 'g2', null, [getItem('Cargar nuevo producto', '3'), getItem('Pausados', '4')], 'group'),
  ]),
  getItem('Preguntas', 'sub3', <MailOutlined />, [
    getItem('', 'g3', null, [getItem('Sin responder', '5')], 'group'),
  ]),
  getItem('Opciones', 'sub4', <MailOutlined />, [
    getItem('', 'g4', null, [getItem('Editar perfil empresa', '6'), getItem('Administrar notificaciones', '7'), getItem('Contraseña y seguridad', '8')], 'group'),
  ]),
];

const VendedorMenu = () => {
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

export default VendedorMenu;
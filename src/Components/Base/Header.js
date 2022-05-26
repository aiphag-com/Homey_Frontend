import { Button, PageHeader } from 'antd';
import Logo from '../../Assets/LogoHomey.png'

// color y centrar botton cerrar session
const Header = () => {

  return(
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title={<img className="" src={Logo} alt="" />}
      extra={<div className=""> <Button key="3">Cerrar sesión</Button> </div>}
    >
    </PageHeader>
  </div>
);
    }
export default Header;
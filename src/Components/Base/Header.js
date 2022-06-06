import { Button, PageHeader } from "antd";
import Logo from "../../Assets/LogoHomeySeller.png";


const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper mb-8 border-b-2 border-[#D3ADF7]">
      <PageHeader
        ghost
        title={<img className=" h-[70px]" src={Logo} alt=""/>}
        extra={
          <div className="">
            <Button key="3">Cerrar sesión</Button>
          </div>
        }
      ></PageHeader>
    </div>
  );
};
export default Header;

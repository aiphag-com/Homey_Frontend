import { Button, PageHeader } from "antd";
import Logo from "../../Assets/LogoHomeyAdmin.png";

// color y centrar botton cerrar session
const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper bg-[#22075E] mb-8">
      <PageHeader
        title={<img className="" src={Logo} alt="" />}
        extra={
          <div className="">
            {" "}
            <Button
            style={{
                background: "#22075E",
                color: "white",
                borderRadius: 7
            }}
            key="3">
              Cerrar sesión
            </Button>{" "}
          </div>
        }
      ></PageHeader>
    </div>
  );
};
export default Header;

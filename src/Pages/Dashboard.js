import React, {useState} from "react";
import Icon from "@mdi/react";

import { mdiUnfoldLessHorizontal, mdiUnfoldMoreHorizontal,
    mdiCartOutline, mdiTagOutline , mdiChatOutline , mdiWrenchOutline} from "@mdi/js";

const Dashboard = () => {
    const [sideMenu, setSideMenu] = useState();
    const swichMenu = () => setSideMenu(!sideMenu);

    return (
        <>
        <div className="main_menu">
            <div className="side_menu_container">

                <div onClick={swichMenu}>
                    <a href="#/">
                        <div className="icon1">
                            <Icon path={mdiCartOutline} size={1}/>
                        </div>
                        VENTAS
                        <div className="icon2">
                            {sideMenu ? (
                                <Icon path={mdiUnfoldLessHorizontal} size={1}/>
                            ) : (
                                <Icon path={mdiUnfoldMoreHorizontal} size={1}/>
                            )}
                        </div>
                    </a>
                    <div name="submenuVentas" className="menu_container">
                        <div>
                            <a href="#/">Coordinar envios</a>
                            <span className="notification_badge">888</span>
                        </div>
                        <div>
                            <a href="#/">Historial de ventas</a>
                        </div>
                    </div>
                </div>

                <div onClick={swichMenu}>
                    <a href="#/">
                        <div className="icon1">
                            <Icon path={mdiTagOutline } size={1} />
                        </div>
                        PRODUCTOS
                        <div className="icon2">
                            {sideMenu ? (
                                <Icon path={mdiUnfoldLessHorizontal} size={1}/>
                            ) : (
                                <Icon path={mdiUnfoldMoreHorizontal} size={1}/>
                            )}
                        </div>
                    </a>
                    <div id="submenuProductos" className="menu_container">
                        <a href="#/">Cargar nuevo producto</a>
                        <a href="#/">Pausados</a>
                    </div>
                </div>

                <div onClick={swichMenu}>
                    <a href="#/">
                        <div className="icon1">
                            <Icon path={mdiChatOutline} size={1} />
                        </div>
                        PREGUNTAS
                        <div className="icon2">
                            {sideMenu ? (
                                <Icon path={mdiUnfoldLessHorizontal} size={1}/>
                            ) : (
                                <Icon path={mdiUnfoldMoreHorizontal} size={1}/>
                            )}
                        </div>
                    </a>
                    <div id="submenuPreguntas" className="menu_container">
                        <a href="#/">Sin responder</a>
                    </div>
                </div>

                <div onClick={swichMenu}>
                    <a href="#/">
                        <div className="icon1">
                            <Icon path={mdiWrenchOutline} size={1} />
                        </div>
                        OPCIONES
                        <div className="icon2">
                            {sideMenu ? (
                                <Icon path={mdiUnfoldLessHorizontal} size={1}/>
                            ) : (
                                <Icon path={mdiUnfoldMoreHorizontal} size={1}/>
                            )}
                        </div>
                    </a>
                    <div id="submenuConfiguraciones" className="menu_container">
                        <a href="#/">Editar perfil empresa</a>
                        <a href="#/">Administrar notificaciones</a>
                        <a href="#/">Contraseña y seguridad</a>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    return (
        <>
            <div className="grid grid-cols-4 gap-x-56 justify-items-center font-poppins">
                <div className="col-span-2">

                    <div className="bg-[#C4C4C4] w-[22rem] h-[15rem] border-solid border-[6px] border-[#C84444]">
                        <p className="text-[#C84444] p-4 text-3xl">Renders</p>
                        <div className="m-5 flex flex-col items-start">
                            <button className="text-[#C84444] bg-[#FFFFFF] p-1">Ver solicitudes</button>
                            <button className="text-[#C84444] border-[#C84444] border mt-2 p-1">Cargar nuevos render</button>
                        </div>
                    </div>

                    <div className="bg-[#C4C4C4] mt-4 w-[22rem] h-[15rem] border-solid border-[6px] border-[#C84444]">
                        <p className="text-[#C84444] p-4 text-3xl">Gestión Vendedores</p>
                        <div className="m-5 flex flex-col items-start">
                            <button className="text-[#C84444] bg-[#FFFFFF] p-1">Ver todos</button>
                            <Link to="/NewSellerForm">
                                <button className="text-[#C84444] border-[#C84444] border mt-2 p-1 ">Cargar nueva empresa</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>

                <div className="bg-[#C4C4C4] w-[35rem] h-[31rem] border-solid border-[6px] border-[#C84444]">
                    <div className="m-2">
                        <p className="text-[#C84444] text-3xl -mb-0.5">Métricas</p>
                        <button className="text-[#C84444] bg-white mt-2 bg-[#FFFFFF] p-1">Ingresar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
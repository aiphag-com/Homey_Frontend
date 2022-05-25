import React from "react";

const AdminDashboard = () => {

    return (
        <>
            <div className="grid grid-cols-4 gap-4 justify-items-center">
                <div className="col-span-2">
                    <div className="bg-[#C4C4C4] w-[22rem] h-[15rem]">
                        <p className="text-[#C84444] p-4 text-3xl">Renders</p>
                        <div className="m-5 flex flex-col">
                        <button className="text-[#C84444] bg-white">Ver solicitudes</button>
                        <button className="text-[#C84444] border-[#C84444] border mt-2">Cargar nuevos render</button>
                        </div>
                    </div>
                    <div className="bg-[#C4C4C4] mt-4 w-[22rem] h-[15rem]">
                        <p className="text-[#C84444] p-4 text-3xl">Gestión Vendedores</p>
                        <div className="m-5 flex flex-col">
                        <button className="text-[#C84444] bg-white">Ver todos</button>
                        <button className="text-[#C84444] border-[#C84444] border mt-2">Cargar nueva empresa</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#C4C4C4] w-[35rem] h-[31rem]">
                <div className="m-2">
                    <p className="text-[#C84444] text-3xl -mb-0.5">Métricas</p>
                    <button className="text-[#C84444] bg-white mt-2">Ingresar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
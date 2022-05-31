import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";

// aca tiene que ser un .map que solo se use una tarjeta y se pase la info por props
const AdminDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 font-poppins ">

                  <AdminDashboardCard />
                  <AdminDashboardCard />
                  <AdminDashboardCard />
                  <AdminDashboardCard />
                  <AdminDashboardCard />

            </div>
        </>
    );
}

export default AdminDashboard;
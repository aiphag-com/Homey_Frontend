import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import { data } from "../../Utils/Utils";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
    <div className="flex justify-center items-center font-poppins h-100 w-screen">
      <div className="grid grid-cols-3 gap-10 p-5">
        {data.map((data) => (
          <Link to={data.link}>
            <AdminDashboardCard
              key={data.id}
              name={data?.name}
              description={data.description}
            />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;

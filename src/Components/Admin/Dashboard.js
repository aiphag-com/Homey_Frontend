import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import {data} from '../../Utils/Utils';
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 font-poppins ">
          {data.map(data => (
              <Link to={data.link}>
              <AdminDashboardCard key={data.id} name={data?.name} description={data.description} />
              </Link>
              ))}
            </div>
        </>
    );
}

export default AdminDashboard;
import React from "react";
import image from '../../Assets/PlaceHolderCardAdmin.png';

const AdminDashboardCard = (props) => {

  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-[#9254DE] shadow-md">
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="p-4 h-36">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardCard;
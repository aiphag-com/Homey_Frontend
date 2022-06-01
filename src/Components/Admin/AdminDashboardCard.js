import React from "react";
import image from '../../Assets/PlaceHolderCardAdmin.png';
import {LocalizedModal} from '../Base/Modal'

// aca tiene que venir con props del componente padre
const AdminDashboardCard = () => {

  return (
    <>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">name</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>
          <LocalizedModal />
        </div>
      </div>
    </>
  );
}

export default AdminDashboardCard;
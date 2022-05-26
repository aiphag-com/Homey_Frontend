import React from "react";
import placeHolderImage from '../../Assets/placeHolderImage.png';

const BoxNewProduct = () => {

  return (
    <div className="flex items-center justify-center ">
      <div className="block items-center p-10  border-solid border-[2.5px] rounded-xl border-[#EFDEFF] bg-[#ffffff]">
        <div className="flex flex-col items-center justify-center">
          <img src={placeHolderImage} alt=""/>
          <div className="flex flex-col text-center mt-2">
          <p className="text-1xl font-bold">Nombre del producto apariencia</p>
            <p>$ XXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxNewProduct;
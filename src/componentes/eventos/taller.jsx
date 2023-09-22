import React, { useEffect, useState } from "react";
import SolAmarillo from "../../../src/assets/Sol amarillo CTA.svg";

const Taller = ({ taller }) => {
  return (
    <div className="">
      <div className="relative w-[58rem] h-[46rem]">
        <div className="absolute z-20 w-full h-full">
          <div className="w-full h-[36rem] relative overflow-hidden">
            <img className="w-full absolute " src={taller.URL}></img>
          </div>
          <div className="flex flex-col justify-between bg-[#F9D1FF] border-2 border-black mt-5 w-[35rem] h-[10rem] p-5">
            <div className="text-3xl">{taller.nombre}</div>
            <div className="text-xs">{taller.createdAt.slice(0, 7)}</div>
          </div>
        </div>
        <img
          className="absolute custom-spin z-10 top-[9.5rem] left-[30rem] w-[40rem]"
          src={SolAmarillo}
        ></img>
      </div>
      {/* descripcion */}
      <div className=" w-[40rem] my-10">
        <div className="text-lg">{taller.descripcion}</div>
      </div>
    </div>
  );
};

export default Taller;

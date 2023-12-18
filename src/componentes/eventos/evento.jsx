import React, { useEffect, useState } from "react";
import SolAmarillo from "/solamarilloCTA.svg";
import fotoDefault from "/default.svg";
import removeHtmlTags from "../../lib/parseoHTML";

const Evento = ({ evento }) => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center">
      <div className="relative w-[25rem] md:w-[58rem] h-[33rem] md:h-[46rem]">
        <div className="absolute z-20 w-full h-full">
          <div className="w-full h-[20rem] md:h-[36rem] relative overflow-hidden">
            <img className="w-full absolute " src={fotoDefault}></img>
          </div>
          <div className="flex flex-col justify-between bg-[#F9D1FF] border-2 border-black mt-5 w-[24rem] md:w-[35rem] h-fit p-5">
            <div className="text-3xl">{evento.nombre}</div>
            <div className="text-xs">{evento.createdAt.slice(0, 7)}</div>
          </div>
          {/* descripcion */}
          <div className="w-[24rem] md:w-[40rem] my-10">
            <div className="text-lg">{evento.descripcion}</div>
          </div>
        </div>
        <img
          className="hidden md:absolute custom-spin z-10 top-[9.5rem] left-[30rem] w-[40rem]"
          src={SolAmarillo}
        ></img>
      </div>
    </div>
  );
};

export default Evento;

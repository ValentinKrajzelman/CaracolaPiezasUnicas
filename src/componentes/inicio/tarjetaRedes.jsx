import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const TarjetaRedes = ({ imagen, texto, url }) => {
  return (
    <a href={url}>
      <div className="relative w-[6rem] h-[6rem]">
        <div className="absolute z-20 w-full h-full">
          <div className="flex  w-full h-full flex-col justify-center items-center border-2 border-black bg-[#F9D1FF]">
            <img className="w-[3rem]" src={imagen}></img>
            <div className="">{texto}</div>
          </div>
        </div>

        <div className="absolute top-[-0.7rem] right-[-0.7rem] w-8 h-8 ">
          <div className="relative w-full h-full ">
            <div className="absolute w-full h-full z-20 border-2 border-black bg-[#9BDEAC]">
              <div className="flex justify-center items-center w-full h-full">
                <ArrowUpRightIcon className="w-6" />
              </div>
            </div>
            <div className="absolute z-10 top-[0.1rem] right-[-0.1rem] w-full h-full bg-black"></div>
          </div>
        </div>

        <div className="absolute z-10 w-full h-full top-[0.2rem] right-[-0.2rem] flex-col justify-center items-center border-2 border-black bg-black"></div>
      </div>
    </a>
  );
};

export default TarjetaRedes;

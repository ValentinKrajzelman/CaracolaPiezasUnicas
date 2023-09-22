import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Barra = ({ talleres, cambiarTaller }) => {
  return (
    <div>
      <div className="bg-[#BF9AF3] mx-[1rem] border-2 border-black w-[20rem]">
        <div className="p-2 text-5xl font-medium mb-5">Talleres</div>
        <div>
          {talleres.map((taller) => (
            <div
              key={taller._id}
              className="flex items-center justify-between bg-[#F7F5DD] h-[4.5rem] p-2 m-[0.5rem] border-[1px] border-black"
            >
              <div className="flex flex-col justify-between">
                <p className="text-md mb-2">
                  {taller.nombre}
                </p>
                <p className="text-xs ">
                  {taller.createdAt.slice(0, 10)}
                </p>
              </div>
              <button
                className="flex w-[2rem] h-[3.6rem] justify-center items-center border-2 border-black bg-[#9BDEAC]"
                onClick={() => {
                  cambiarTaller(taller._id);
                }}
              >
                <ArrowUpRightIcon className="w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barra;
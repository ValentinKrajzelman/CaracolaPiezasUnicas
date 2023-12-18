import React from "react";
import { Link } from "react-router-dom";
import fotoDefault from "/default.svg";
import tira from "/tira.svg";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import removeHtmlTags from "../../lib/parseoHTML";

const estiloTodos =
  " flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline";
const estiloTodosNegativo =
  "flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline bg-black absolute z-0 right-[-0.25rem] bottom-[-0.25rem]";

const Talleres = ({ talleres }) => {


  return (
    <div>
      <div className="flex justify-center my-[10rem]">
        <div className="relative w-[25rem] md:w-[83rem] h-[36rem]">
          <div className="absolute z-50 w-full h-full">
            <div className="w-full h-full flex flex-col border-2 border-black bg-[#BF9AF3] ">
              {/* titulo */}
              <div className="p-2 text-5xl font-medium mb-5">Talleres</div>
              {/* talleres */}
              <div className="grow flex items-center justify-evenly">
                <div key={talleres[0]._id} className="relative w-[17rem] h-[25rem] md:hidden">
                  <div className="absolute w-full h-full top-0 left-0 z-20 border-2 border-black bg-[#F9D1FF]">
                    <div className="flex flex-col h-full">
                      <img
                        className="p-1 h-[8rem] w-full"
                        src={fotoDefault}
                      ></img>
                      <div className="h-[2rem] grow text-3xl p-2">
                      {talleres[0].nombre.length > 15
                            ? removeHtmlTags(talleres[0].nombre).slice(0, 15) + "..."
                            : removeHtmlTags(talleres[0].nombre).slice(0, 15)}
                      </div>
                      <div className="h-[7.5rem] px-2 overflow-hidden">
                      {talleres[0].descripcion.length > 150
                            ? removeHtmlTags(talleres[0].descripcion).slice(0, 150) + "..."
                            : removeHtmlTags(talleres[0].descripcion).slice(0, 150)}
                      </div>
                      <div className="flex justify-end">
                        <div className="relative h-[5rem]">
                          <div className="absolute right-0 bottom-0 z-10">
                            <Link
                              className=" flex text-l font-medium w-[4rem] h-[2.5rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline"
                              to="/talleres/?id=0"
                            >
                              Ver <ArrowUpRightIcon className="w-5" />
                            </Link>
                          </div>
                          <div className="flex text-l font-medium w-[4rem] h-[2.5rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black underline bg-black absolute z-0 right-[-0.15rem] bottom-[-0.15rem]">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full z-0 border-2 border-black bg-[#000000]"></div>
                </div>
                {talleres.map((taller) => {
                  return (
                    <div
                      key={taller._id}
                      className="hidden md:block relative w-[17rem] h-[25rem]"
                    >
                      <div className="absolute w-full h-full top-0 left-0 z-20 border-2 border-black bg-[#F9D1FF]">
                        <div className="flex flex-col h-full">
                          <img
                            className="p-1 h-[8rem] w-full"
                            src={fotoDefault}
                          ></img>
                          <div className="h-[2rem] grow text-3xl p-2">
                          {taller.nombre.length > 15
                            ? removeHtmlTags(taller.nombre).slice(0, 15) + "..."
                            : removeHtmlTags(taller.nombre).slice(0, 15)}
                          </div>
                          <div className="h-[7.5rem] px-2 overflow-hidden">
                          {taller.descripcion.length > 150
                            ? removeHtmlTags(taller.descripcion).slice(0, 150) + "..."
                            : removeHtmlTags(taller.descripcion).slice(0, 150)}
                          </div>
                          <div className="flex justify-end">
                            <div className="relative h-[5rem]">
                              <div className="absolute right-0 bottom-0 z-10">
                                <Link
                                  className=" flex text-l font-medium w-[4rem] h-[2.5rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline"
                                  to="/talleres/?id=0"
                                >
                                  Ver <ArrowUpRightIcon className="w-5" />
                                </Link>
                              </div>
                              <div className="flex text-l font-medium w-[4rem] h-[2.5rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black underline bg-black absolute z-0 right-[-0.15rem] bottom-[-0.15rem]">
                                {" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full z-0 border-2 border-black bg-[#000000]"></div>
                    </div>
                  );
                })}
              </div>
              {/* boton */}
              <div className="">
                <div className="flex justify-end h-[5rem]">
                  <div className="relative">
                    <div className="absolute right-0 bottom-0 z-10">
                      <Link className={estiloTodos} to="/talleres/?id=0">
                        Todos <ArrowUpRightIcon className="w-5" />
                      </Link>
                    </div>
                    <div className={estiloTodosNegativo}> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0.3rem] left-[0.3rem] z-30 w-full h-full  border-2 border-black bg-[#BF9AF3] "></div>
          <div className="movimiento-diagonal">
            <img src={tira} className="w-full h-full rotate-[-6deg]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talleres;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import tira from "/tira.svg";

import removeHtmlTags from "../../lib/parseoHTML";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const estiloTodos =
  " flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline";
const estiloTodosNegativo =
  "flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline bg-black absolute z-0 right-[-0.25rem] bottom-[-0.25rem]";

const VentanaNoticiasMobile = ({ noticias, eventos }) => {
  return (
    <div className="md:hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="relative  mb-8 w-[25rem] h-[38rem]">
          {/* ventana noticias */}
          <div className="absolute z-50">
            <div className="">
              <div className="flex w-[25rem] h-[38rem] border-2 border-black bg-[#EF7E98]">
                <div className="flex flex-col h-full w-[25rem]">
                  {/* titulo */}
                  <div className="p-2 text-5xl font-medium mb-5">Noticias</div>
                  {/* foto noticia */}
                  <div className="relative h-[27rem] mx-5 ">
                    <div className="relative overflow-hidden w-[22rem] h-full">
                      <img
                        className="absolute top-0 left-0  w-[22rem] h-full"
                        src={noticias.URL}
                      ></img>
                    </div>
                    {/* recuadro noticia */}
                    <div className="absolute bottom-[-2rem] left-[-1rem] md:bottom-[-3rem] md:left-[-5rem] w-[22rem] h-[16rem] bg-[#F9D1FF] border-[1px] border-black">
                      <div className="relative w-full h-full">
                        <div className="text-3xl p-2">
                          {noticias.nombre.length > 50
                            ? removeHtmlTags(noticias.nombre).slice(0, 50) +
                              "..."
                            : removeHtmlTags(noticias.nombre).slice(0, 50)}
                        </div>
                        <div className="text-sm p-2">
                          {noticias.descripcion.length > 300
                            ? removeHtmlTags(noticias.descripcion).slice(
                                0,
                                300
                              ) + "..."
                            : removeHtmlTags(noticias.descripcion).slice(
                                0,
                                300
                              )}
                        </div>
                        <div className="absolute z-20 bottom-[-2rem] left-[9rem]">
                          <Link
                            className="flex w-[3rem] h-[2.5rem] justify-center items-center m-2 border-2 border-black bg-[#9BDEAC]"
                            to="/talleres/?id=0"
                          >
                            <ArrowUpRightIcon className="w-5" />
                          </Link>
                        </div>
                        <div className="absolute z-10 bottom-[-2.1rem] left-[9.1rem] w-[3rem] h-[2.5rem] m-2 border-2 border-black bg-[#9BDEAC]"></div>
                      </div>
                    </div>
                  </div>
                  {/* boton abajo izquierda */}
                  <div className="flex h-[6.5rem] justify-end">
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
          </div>
          {/* <div className="absolute w-[83rem] h-[38rem] border-2 z-40 border-black top-[0.3rem] left-[0.3rem] bg-[#BF9AF3] "></div>
          <div className="absolute w-[83rem] h-[38rem] border-2 z-30 border-black top-[0.6rem] left-[0.6rem] bg-[#BF9AF3] "></div> */}
          {/* <div className="movimiento-diagonal">
            <img src={tira} className="w-full h-full rotate-[-6deg]"></img>
          </div> */}
        </div>

        {/* tarjeta eventos */}
        <div className="flex flex-col w-[25rem] bg-[#BF9AF3] border-2 border-black">
          <div className="p-2 text-5xl font-medium">Eventos</div>
          <div className="flex flex-col mx-3">
            {eventos.map((evento, indice) => {
              return (
                <div
                  key={evento._id}
                  className="bg-[#F7F5DD] flex w-[23.5rem] justify-between  mt-5 p-1 border-[1px] border-black"
                >
                  <div className="w-20 min-w-[5rem] h-20 bg-[#F9D1FF] flex justify-center items-center border-[1px] border-black">
                    {evento.fecha.slice(4, 11)}
                  </div>
                  <div className="flex flex-col justify-between grow px-3 ">
                    <div className="">
                      {evento.nombre.length > 25
                        ? removeHtmlTags(evento.nombre).slice(0, 25) + "..."
                        : removeHtmlTags(evento.nombre).slice(0, 25)}
                    </div>
                    <div className="text-sm">
                      {evento.descripcion.length > 15
                        ? removeHtmlTags(evento.descripcion).slice(0, 15) +
                          "..."
                        : removeHtmlTags(evento.descripcion).slice(0, 15)}
                    </div>
                  </div>
                  <div className="relative w-[3rem]">
                    <div className="absolute top-0 right-0 z-20">
                      <Link
                        className="flex w-[2rem] h-[4rem] justify-center items-center m-2 border-2 border-black bg-[#9BDEAC]"
                        to="/talleres/?id=0"
                      >
                        <ArrowUpRightIcon className="w-5" />
                      </Link>
                    </div>
                    <div className="absolute bottom-[-0.1rem] right-[-0.1rem] z-10 w-[2rem] h-[4rem] justify-center items-center m-2 border-2 border-black bg-[#9BDEAC]"></div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* boton abajo a la derecha */}
          <div className="flex justify-end h-[11rem]">
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
  );
};

export default VentanaNoticiasMobile;

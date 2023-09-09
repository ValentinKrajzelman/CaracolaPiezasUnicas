import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Label, TextInput, Card, Carousel } from "flowbite-react";

import TarjetaCentros from "./tarjetaCentros";
import CTA from "./CTA";
import VentanaNoticias from "./ventanaNoticias";

import quienesSomos from "../../assets/quienesSomos.jpg";
import { Link } from "react-router-dom";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const estiloTodos =
  "flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline";
const estiloTodosNegativo =
  "flex text-l font-medium w-[6rem] h-[3rem] justify-center items-center pl-[0.5rem] m-2 border-2 border-black bg-[#9BDEAC] underline bg-black absolute z-0 right-[-0.25rem] bottom-[-0.25rem]";

const Inicio = () => {
  const talleres = useSelector((state) => state.talleres.talleres);
  const eventos = useSelector((state) => state.eventos.eventos.slice(0, 4));
  const noticias = useSelector((state) => state.noticias.noticias[0]);

  const popularTalleres = talleres.map((taller, indice) => {
    return (
      <div>
        <img className="h-full w-full" src={taller.URL} alt="..." />
        <div className="absolute flex flex-col justify-between pb-10 px-4 pt-2 z-10 bottom-0 left-0 bg-slate-300 w-full bg-opacity-50 h-1/4">
          <div className="text-2xl">{taller.nombre}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="relative">
      <CTA />
      {!talleres[1] || !eventos[1] || !noticias ? (
        console.log("cargando")
      ) : (
        <div>
          <VentanaNoticias noticias={noticias} eventos={eventos} />

          {/* quienes somos*/}
          <div className="flex h-56 sm:h-64 xl:h-80 2xl:h-96 ">
            <div>
              <div className="text-5xl pt-5 pr-5">Quienes Somos</div>
              <div className="text-xl pt-5 pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam veritatis exercitationem suscipit animi provident
                quibusdam recusandae repellat culpa, quos beatae modi, ipsa
                natus obcaecati. Tenetur similique molestiae vel esse dolores?
              </div>
            </div>
            <img src={quienesSomos} alt="" className="max-h-[100%] p-5" />
          </div>

          <div className="h-[30rem] w-full  pr-5 "></div>

          {/* centros */}
          <div className="p-5">
            <div className="p-5 text-2xl ">Centros</div>
            <div className="p-5 ">
              Los lugares en los que estamos y hacemos actividades.
            </div>
            <div className="flex flex-row justify-between">
              <TarjetaCentros />
              <TarjetaCentros />
              <TarjetaCentros />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;

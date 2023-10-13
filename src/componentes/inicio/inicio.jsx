import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Accordion, Label, TextInput, Card, Carousel } from "flowbite-react";

import TarjetaCentros from "./tarjetaCentros";
import CTA from "./CTA";
import VentanaNoticias from "./ventanaNoticias";
import VentanaNoticiasMobile from "./ventanaNoticiasMobile";
import Talleres from "./talleres";
import Hogares from "./hogares";
import Contacto from "./contacto";

import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Inicio = () => {
  const talleres = useSelector((state) => state.talleres.talleres.slice(0, 4));
  const eventos = useSelector((state) => state.eventos.eventos.slice(0, 4));
  const noticias = useSelector((state) => state.noticias.noticias[0]);

  return (
    <div className="relative">
      <CTA />
      {!talleres[1] || !eventos[1] || !noticias ? (
        console.log("cargando")
      ) : (
        <div>
          <VentanaNoticias noticias={noticias} eventos={eventos} />
          <VentanaNoticiasMobile  noticias={noticias} eventos={eventos} />
          <Talleres talleres={talleres} />
          <Hogares />
          <Contacto/>
        </div>
      )}
    </div>
  );
};

export default Inicio;

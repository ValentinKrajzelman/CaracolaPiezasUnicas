import React from "react";

import TarjetaRedes from "./tarjetaRedes";

import facebook from "/Facebook.png";
import insta from "/Instagram.png";
import wpp from "/Whatsapp.png";
import solAmarilloSimple from "/solAmarilloSimple.svg";

const Contacto = () => {
  return (
    <div className="flex justify-center my-0 md:my-[8rem]">
      <div className="relative w-[25rem] h-[25rem]">
        <div className="absolute z-20 w-full h-full">
          {/* pantalla grande */}
          <div className="hidden md:flex flex-col justify-between w-full h-full">
            <div className="flex justify-center items-center w-full">
              <TarjetaRedes
                imagen={facebook}
                texto="Facebook"
                url="https://www.youtube.com"
              />
            </div>
            <div className="flex justify-center items-center w-full text-5xl font-medium ">
              Contacto
            </div>
            <div className="flex justify-between items-center w-full">
              <TarjetaRedes
                imagen={insta}
                texto="Insta"
                url="https://www.youtube.com"
              />
              <TarjetaRedes
                imagen={wpp}
                texto="Wsp"
                url="https://www.youtube.com"
              />
            </div>
          </div>
          {/* pantalla chica */}
          <div className="flex md:hidden  flex-col justify-evenly w-full h-full">
            <div className="flex justify-center items-center w-full text-5xl font-medium ">
              Contacto
            </div>
            <div className="flex justify-evenly items-center w-full">
               <TarjetaRedes
                imagen={facebook}
                texto="Facebook"
                url="https://www.youtube.com"
              />
              <TarjetaRedes
                imagen={insta}
                texto="Insta"
                url="https://www.youtube.com"
              />
              <TarjetaRedes
                imagen={wpp}
                texto="Wsp"
                url="https://www.youtube.com"
              />
            </div>
          </div>

        </div>
        <div className="hidden md:block absolute  z-10 top-[-6rem] left-[-8.5rem] h-[50rem] w-[50rem]">
        <img
          className="custom-spin"
          src={solAmarilloSimple}
          ></img>
          </div>
      </div>
    </div>
  );
};

export default Contacto;

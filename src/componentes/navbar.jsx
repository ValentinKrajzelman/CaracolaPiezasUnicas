import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import bannerNavbar from "/bannerNavbar.png";

const styleLink =
  "text-md md:text-xl font-medium md:px-3 border-2 border-transparent hover:border-black hover:bg-[#9BDEAC] hover:underline p-2 md:ml-24";

const Navbarr = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-center items-center md:pl-24 py-10">
        <div>
          <Link to="/">
            <img src={bannerNavbar} className="h-16 md:h-24" alt="Caracola" />
          </Link>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center  w-full md:pl-28 md:pr-16">
          <div >
            <Link className={styleLink} to="/">
              Inicio
            </Link>
            <Link className={styleLink} to="/talleres/?id=0">
              Talleres
            </Link>
            <Link className={styleLink} to="/noticias/?id=0">
              Noticias
            </Link>
          </div>
          <div>
            <Link className={styleLink} to="/eventos/?id=0">
              Eventos
            </Link>
            <Link className={styleLink} to="/quienesSomos">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarr;

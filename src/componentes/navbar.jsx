import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import bannerNavbar from "../assets/bannerNavbar.png";

const styleLink = "text-xl  font-medium px-3 border-2 border-transparent hover:border-black hover:bg-[#9BDEAC] hover:underline";

const Navbarr = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center pl-24 py-10">
        <div>
          <Link to="/">
            <img src={bannerNavbar} className="h-24" alt="Caracola" />
          </Link>
        </div>
          <div className="flex justify-between w-full pl-28 pr-16">
            <Link className={styleLink} to="/">
              Inicio
            </Link>
            <Link className={styleLink} to="/talleres/?id=0">
              Talleres
            </Link>
            <Link className={styleLink} to="/noticias/?id=0">
              Noticias
            </Link>
            <Link className={styleLink} to="/eventos/?id=0">
              Eventos
            </Link>
            <Link className={styleLink} to="/quienesSomos">
              Nosotros
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Navbarr;

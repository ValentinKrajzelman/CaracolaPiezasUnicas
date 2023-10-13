import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Barra from "./barra";
import Taller from "./taller";

const Talleres = () => {
  
  const talleres = useSelector((state) => state.talleres.talleres);

  const [taller, setTaller] = useState(null);

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    console.log(id);

    setTaller(
      id != 0 ? talleres.find((taller) => taller._id == id) : talleres[0]
    );
  }, [talleres]);

  const cambiarTaller = (id) => {
    setTaller(
      id != 0 ? talleres.find((taller) => taller._id == id) : talleres[0]
    );
  };

  return (
    <div className="my-[3rem]">
      {!taller ? (
        console.log("cargando")
      ) : (
        <div>
          <div className="flex flex-col md:flex-row">

            <div className="order-2 md:order-1">
            <Barra talleres={talleres} cambiarTaller={cambiarTaller}/>
            </div>
            <div className="order-1 md:order-2">
            <Taller taller={taller}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Talleres;

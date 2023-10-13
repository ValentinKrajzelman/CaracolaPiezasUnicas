import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Barra from "./barra";
import Evento from "./evento";

const Eventos = () => {
  
  const eventos = useSelector((state) => state.eventos.eventos);

  const [evento, setEvento] = useState(null);

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    console.log(id);

    setEvento(
      id != 0 ? eventos.find((evento) => evento._id == id) : eventos[0]
    );
  }, [eventos]);

  const cambiarEvento = (id) => {
    setEvento(
      id != 0 ? eventos.find((evento) => evento._id == id) : eventos[0]
    );
  };

  return (
    <div className="my-[3rem]">
      {!evento ? (
        console.log("cargando")
      ) : (
        <div>
          <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1">
            <Barra eventos={eventos} cambiarEvento={cambiarEvento}/>
          </div>
          <div className="order-1 md:order-2">
            <Evento evento={evento}/>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eventos;

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Barra from "./barra";
import Noticia from "./noticia";

const Noticias = () => {
  
  const noticias = useSelector((state) => state.noticias.noticias);

  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    console.log(id);

    setNoticia(
      id != 0 ? noticias.find((noticia) => noticia._id == id) : noticias[0]
    );
  }, [noticias]);

  const cambiarNoticia = (id) => {
    setNoticia(
      id != 0 ? noticias.find((noticia) => noticia._id == id) : noticias[0]
    );
  };

  return (
    <div className="my-[3rem]">
      {!noticia ? (
        console.log("cargando")
      ) : (
        <div>
          <div className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1">
            <Barra noticias={noticias} cambiarNoticia={cambiarNoticia}/>
          </div>
            <div className="order-1 md:order-2">
            <Noticia noticia={noticia}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Noticias;

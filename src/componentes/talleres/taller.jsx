import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Taller = () => {
    
    const [taller, setTaller] = useState(null);

    const talleres = useSelector((state) => state.talleres.talleres);

    useEffect(()=>{
        var urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
    
        setTaller(id ? (talleres.find((taller)=> taller._id == id)) : (talleres[0]))
        console.log(taller);
    },[])

    return (
    <div className="grow">
      {!taller ? (
        console.log("cargando")
      ) : (
        <div>
          {/* titulo */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{taller.nombre}</div>
          </div>

          <div className="container mx-auto sm:px-6 lg:px-8">
            <img className="w-full" src={taller.URL}></img>
          </div>

          {/* descripcion */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">{taller.descripcion}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taller;

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Barra from "./barra";
import Taller from "./taller";

const Talleres = () => {

  let location = useLocation();

  useEffect(()=>{
    var urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

  },[location])

  return (
    <div>
      <div className="flex">
        <Barra />
        <Taller />
      </div>
    </div>
  );
};

export default Talleres;

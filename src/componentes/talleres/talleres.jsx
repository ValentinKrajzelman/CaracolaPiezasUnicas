import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import Barra from "./barra";
import Taller from "./taller";

const Talleres = () => {
  const talleres = useSelector((state) => state.talleres.talleres);

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

import React, { useState, useRef, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio/inicio";
import Eventos from "./componentes/eventos/eventos";
import Talleres from "./componentes/talleres/index";
import Noticias from "./componentes/noticias/noticias";
import Dashboard from "./componentes/dashboard/index";
import PiePag from "./componentes/PiePag";

import { useSelector, useDispatch } from "react-redux";

import { getTalleres } from "./state/slicers/talleres";
import { getNoticias } from "./state/slicers/noticias";
import { getEventos } from "./state/slicers/eventos";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTalleres());
    dispatch(getNoticias());
    dispatch(getEventos());
  }, []);

  return (
    <div className="pb-10 bg-[#F7F5DD] font-principal">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/eventos/*" element={<Eventos />}></Route>
        <Route path="/talleres/*" element={<Talleres />}></Route>
        <Route path="/noticias/*" element={<Noticias />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}></Route>
      </Routes>
      <PiePag />
    </div>
  );
};

export default App;

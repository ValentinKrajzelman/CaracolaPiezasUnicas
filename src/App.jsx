import { useState, useRef, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio/inicio";
import Eventos from "./componentes/eventos/eventos";
import Talleres from "./componentes/talleres/talleres";
import Noticias from "./componentes/noticias/noticias";
import Dashboard from "./componentes/dashboard/dashboard";
import PiePag from "./componentes/PiePag";

import { useSelector, useDispatch } from 'react-redux'
import { getEventos } from './state/slicers/eventos'

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getEventos());
  },[]);

  const eventos = useSelector((state) => state.eventos.eventos);

  const cosas = ()=>{ return eventos.length == 0 ? "adsf" :  eventos[0]._id }

  return (
    <div>
      {cosas()}
  </div>
    // <div className="px-32 pb-10 bg-slate-200 font-principal">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Inicio />}></Route>
    //     <Route path="/eventos" element={<Eventos />}></Route>
    //     <Route path="/talleres" element={<Talleres />}></Route>
    //     <Route path="/noticias" element={<Noticias />}></Route>
    //     <Route path="/dashboard" element={<Dashboard />}></Route>
    //   </Routes>
    //   <PiePag />
    // </div>
  );
};

export default App;
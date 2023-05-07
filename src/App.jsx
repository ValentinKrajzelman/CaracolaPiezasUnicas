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
import { getTalleres,createTalleres,deleteTalleres,updateTalleres } from './state/slicers/talleres'

const App = () => {

  let objeto = {
    descripcion: "cosas cosas cosas ",
    nombre: "cosas cosas cosas cosas ",
    // fecha:"asdf",
    // URL:"asdf",
    // URLthumbnail:"asdf",
  }

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getTalleres());
  },[]);

  const Talleres = useSelector((state) => state.talleres.talleres);

  const cosas = ()=>{ return Talleres.length == 0 ? "" :  Talleres.map((taller)=>
  <div key={taller._id}>{taller._id}      
  <button onClick={() => dispatch(deleteTalleres(taller._id))}>
  delete
  </button>
  </div>) }

  return (
    <div>
      {cosas()}
      <button
          // aria-label="Decrement value"
          onClick={() => dispatch(createTalleres(objeto))}
        >
          create
        </button>
      <button
          // aria-label="Decrement value"
          onClick={() => dispatch(updateTalleres(['64441aebf01505194503672b', objeto]))}
        > 
          update
        </button>
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

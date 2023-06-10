import React, {useState, useEffect} from 'react'
import { Route, Routes, useLocation } from "react-router-dom";

import Botones from './botones'
import Seleccion from './seleccion'

const Dashboard = () => {

  return (
    <div>
    <Botones/>
    <Seleccion/>
    </div>
  )
}

export default Dashboard;



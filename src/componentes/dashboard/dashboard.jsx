import React from 'react'

import Botones from './botones'
import Seleccion from './seleccion'
import Modal from './Modal'

import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
    <Botones/>
    <Seleccion/>
    </div>
  )
}

export default Dashboard



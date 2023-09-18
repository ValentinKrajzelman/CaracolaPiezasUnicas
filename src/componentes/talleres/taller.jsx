import React, { useEffect, useState } from "react";

const Taller = ({taller}) => {
  return (
    <div className="grow">
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
    </div>
  );
};

export default Taller;

import React from "react";
import { useSelector } from "react-redux";

// aca la idea es armar la lista con lo saques del state y que tenga un thumbnail, un titulo y el link al final para saltar al taller nada mas,
// saca el view all y hacelo que tenga un largo maximo, ademas en cel deberia cargarse un componente diferente que sea una navbar que se oculta

const Barra = () => {
  const talleres = useSelector((state) => state.talleres.talleres);

  return (
    <div>
      {talleres.length == 0 ? (
        console.log("cargando")
      ) : (
        <div>
          <ul role="list" className="divide-y divide-gray-100">
            {talleres.map((taller) => (
              <li
                key={taller._id}
                className="flex items-center justify-between gap-x-6 py-5"
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={taller.URL}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {taller.nombre}
                    </p>
                  </div>
                </div>
                <a
                  href={"talleres/?id=" + taller._id}
                  className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Barra;

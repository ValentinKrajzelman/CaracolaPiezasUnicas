import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

import { deleteEventos } from "../../state/slicers/eventos";
import { deleteNoticias } from "../../state/slicers/noticias";
import { deleteTalleres } from "../../state/slicers/talleres";

import Modal from "./modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Seleccion = () => {
  const dispatch = useDispatch();

  const talleres = useSelector((state) => state.talleres.talleres);
  const eventos = useSelector((state) => state.eventos.eventos);
  const noticias = useSelector((state) => state.noticias.noticias);

  const [categoria, setCategoria] = useState(0);
  const [arr, setArr] = useState([]);

  //se usa para hacer toggle abierto/cerrado del modal
  const [estado, setEstado] = useState(false);
  //current es el id con el que esta trabajando el modal
  //si es cero el boton guardar crea un elemento nuevo
  //si es diferente a cero esta editando uno preexistente
  const [current, setCurrent] = useState(0);

  let location = useLocation();

  const arrAcciones = [deleteNoticias,deleteTalleres,deleteEventos];

  useEffect(() => {
    setArr([noticias, talleres, eventos]);
  }, [talleres, noticias,eventos]);

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("tipo")) {
      setCategoria(parseInt(urlParams.get("tipo")));
    }
  }, [location]);

  return (
    <div>
      <Modal
        estado={estado}
        current={current}
        tipo={categoria}
        cerrar={() => {
          setEstado(false);
        }}
      />

      {!talleres[1] || !eventos[1] || !noticias[1] ? (
        console.log("cargando")
      ) : (
        <div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
          >
            <li
              key="12345"
              className="overflow-hidden rounded-xl h-[26rem] bg-slate-300 border border-gray-200"
            >
              <button
                type="button"
                className="relative block h-full w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  setCurrent(0);
                  setEstado(true);
                }}
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                  />
                </svg>
                <span className="mt-2 block text-sm font-semibold text-gray-900">
                  Nuevo Item
                </span>
              </button>
            </li>
            {arr[categoria].map((item) => (
              <li
                key={item._id}
                className="overflow-hidden rounded-xl h-[26rem] bg-slate-300 border border-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <img
                    src={item.URLthumbnail}
                    alt={item.nombre}
                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                  />
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {item.nombre}
                  </div>

                  {/* aca empieza el menu de tres puntitos */}

                  <Menu as="div" className="relative ml-auto">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Open options</span>
                      <EllipsisHorizontalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                setCurrent(item);
                                setEstado(true);
                              }}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              Editar
                              <span className="sr-only">, {item.name}</span>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {/* aca hace falta que este boton haga el dispatch de delete en el id que le corresponda */}
                          {({ active }) => (
                            <button
                            onClick={()=>{dispatch(arrAcciones[categoria](item._id))}}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              Eliminar
                              <span className="sr-only">, {item.nombre}</span>
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Fecha</dt>
                    <dd className="text-gray-700">{item.fecha}</dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3 h-[14.6rem] overflow-hidden">
                    <dt className="text-gray-500">Contenido</dt>
                    <dd className="text-gray-700">{item.descripcion}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Seleccion;

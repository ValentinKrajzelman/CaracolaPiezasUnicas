import { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Botones = () => {
  const [activo, setActivo] = useState("0");

  const tabs = [
    {
    name: 'Noticias',
    indice: 0,
    href: "/dashboard/?tipo=0",
    current: false,
  },
    {
    name: 'Talleres',
    indice: 1,
    href: "/dashboard/?tipo=1",
    current: false,
  },
    {
    name: 'Eventos',
    indice: 2,
    href: "/dashboard/?tipo=2",
    current: false,
  },
] 

  return (
    <div>
      <div className="flex justify-center">
        <nav className="max-w-[15rem] sm:max-w-[200rem] py-5  flex flex-wrap space-x-3" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              onClick={() => {
                setActivo(tab.indice);
              }}
              className={classNames(
                activo == tab.indice
                  ? "bg-blue-400 text-gray-800 hover:bg-blue-300"
                  : "bg-blue-200 text-gray-600 hover:text-gray-800",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={activo == tab.indice ? "page" : undefined}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Botones;
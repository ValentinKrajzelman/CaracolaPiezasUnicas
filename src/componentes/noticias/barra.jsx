import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import removeHtmlTags from "../../lib/parseoHTML";


const Barra = ({ noticias, cambiarNoticia }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#BF9AF3] mx-[1rem] border-2 border-black w-[20rem]">
        <div className="p-2 text-5xl font-medium mb-5">Noticias</div>
        <div>
          {noticias.map((noticia) => (
            <div
              key={noticia._id}
              className="flex items-center justify-between bg-[#F7F5DD] h-[4.5rem] p-2 m-[0.5rem] border-[1px] border-black"
            >
              <div className="flex flex-col justify-between">
                <p className="text-md mb-2">
                  {noticia.nombre.length > 25
                    ? removeHtmlTags(noticia.nombre).slice(0, 25) + "..."
                    : removeHtmlTags(noticia.nombre).slice(0, 25)}
                </p>
                <p className="text-xs ">
                  {noticia.createdAt.slice(0, 10)}
                </p>
              </div>
              <button
                className="flex w-[2rem] h-[3.6rem] justify-center items-center border-2 border-black bg-[#9BDEAC]"
                onClick={() => {
                  cambiarNoticia(noticia._id);
                }}
              >
                <ArrowUpRightIcon className="w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barra;

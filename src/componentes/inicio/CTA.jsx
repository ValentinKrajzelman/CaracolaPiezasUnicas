import React from "react";

import SolAmarillo from "../../../src/assets/Sol amarillo CTA.svg";

import foto1 from "../../../src/assets/foto1 CTA.jpg";
import foto2 from "../../../src/assets/foto2 CTA.jpg";
import foto3 from "../../../src/assets/foto3 CTA.jpg";

const CTA = () => {
  return (
    <div className="h-[50rem]">
      <div className="relative h-full w-full overflow-hidden max-w-[100rem]">
        <div>
          <div className="absolute border-2 border-black top-[10rem] z-[5] left-[11rem] bg-[#EF7E98] h-[19rem] w-[150rem] rotate-[4.59deg]">
            <div className="text-[3.5rem] leading-[3.5rem] p-2 w-[35rem]">
              Caracola, <u>piezas unicas</u> hechas por <u> gente unica</u>.
            </div>
            <div className="font-secundario text-lg p-2 w-[30rem]">
              Enseñamos a producir ceramica con cursos personales o grupales, en
              taller y en hogares de niños, para formar caminos y explorar la
              creatividad.
            </div>
          </div>
          <div className="absolute border-2 border-black top-[10.5rem] z-[4] left-[11.7rem] bg-[#000000] h-[19rem] w-[150rem] rotate-[4.59deg]"></div>
        </div>

        <div className="absolute right-[8rem] top-[-1rem] flex flex-col z-10">
          <div>
            <div className="relative h-[17rem] w-[21rem] m-5">
              <div className="absolute h-full w-full border-[6px] z-[1] border-black overflow-hidden rounded-tr-[999px] rounded-tl-[999px] rounded-br-[0px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    className="absolute left-[0rem] top-[-2rem] h-[35rem] w-[33rem] max-w-none"
                    src={foto3}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[1rem] left-[0.5rem] z-[0] bg-black h-[17rem] w-[21rem] overflow-hidden rounded-tr-[999px] rounded-tl-[999px] rounded-br-[0px] rounded-bl-[999px]"></div>
            </div>
          </div>
          <div className="flex">
            <div className="relative h-[10rem] w-[10rem] m-2">
              <div className="absolute h-full w-full border-[6px] z-[1] border-black overflow-hidden rounded-tr-[0px] rounded-tl-[999px] rounded-br-[999px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    className="absolute left-[0rem] top-[-5rem] h-[20rem] max-w-none "
                    src={foto2}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[1rem] left-[0.5rem] z-[0] bg-black h-[10rem] w-[10rem] overflow-hidden rounded-tr-[0px] rounded-tl-[999px] rounded-br-[999px] rounded-bl-[999px]"></div>
            </div>
            <div className="relative h-[13rem] w-[13rem] m-2">
              <div className="absolute h-full w-full border-[6px] z-[1] border-black overflow-hidden rounded-tr-[999px] rounded-tl-[0px] rounded-br-[999px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    className="absolute left-[-4rem] h-[24rem] max-w-none "
                    src={foto1}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[1rem] left-[0.5rem] z-[0] bg-black h-[13rem] w-[13rem] overflow-hidden rounded-tr-[999px] rounded-tl-[0px] rounded-br-[999px] rounded-bl-[999px]"></div>
            </div>
          </div>
        </div>

        <div className="absolute w-[37rem] z-[0]">
          <div className="relative">
            <img
              className="custom-spin absolute z-20 top-[0.5rem] left-[0.17rem] h-[32rem]"
              src={SolAmarillo}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

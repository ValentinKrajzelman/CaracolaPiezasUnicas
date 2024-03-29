import React from "react";

import SolAmarillo from "/solamarilloCTA.svg";

import fotoDefault from "/default.svg";
// import foto1 from "/foto1CTA.jpg";
// import foto2 from "/foto2CTA.jpg";
// import foto3 from "/foto3CTA.jpg";
// import flecha from "/flecha.svg";

const CTA = () => {
  return (
    <div className="h-[50rem]">
      <div className="relative h-full w-full overflow-hidden max-w-[100rem]">
        <div>
          <div className="absolute border-2 border-black top-[14rem] md:top-[10rem] z-[5] left-[-4rem] md:left-[11rem] bg-[#EF7E98] pl-[4rem] pt-[3rem] h-[24rem] md:h-[23rem] w-[150rem] rotate-[9deg] md:rotate-[4.59deg]">
            <div className="flex flex-col text-2xl md:text-[3rem] leading-[3rem] p-2 w-fit md:w-[26rem] rotate-[-9deg] md:rotate-[0deg]">
              Caracola, <u className="bg-[#9BDEAC]">piezas unicas</u> hechas por <u className="bg-[#9BDEAC]"> gente unica</u>
            </div>
            <div className="hidden md:block font-secundario text-lg p-2 w-[30rem]">
              Enseñamos a producir ceramica con cursos personales o grupales, en
              taller y en hogares de niños, para formar caminos y explorar la
              creatividad.
            </div>
          </div>
          <div className="absolute border-2 border-black top-[14.2rem] md:top-[10.5rem] z-[4] left-[-3.3rem] md:left-[11.7rem] bg-[#000000] h-[24rem] md:h-[23rem] w-[150rem] rotate-[9deg] md:rotate-[4.59deg]"></div>
        </div>

        <div className="absolute right-[0rem] md:right-[8rem] top-[7rem] md:top-[-1rem] flex flex-col z-10">
          <div>
            <div className="relative h-[7rem] md:h-[17rem] w-[10rem] md:w-[21rem] m-5">
              <div className="absolute h-full w-full border-[1px] md:border-[6px] z-[1] border-black overflow-hidden rounded-tr-[999px] rounded-tl-[999px] rounded-br-[0px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    // className="absolute left-[0rem] top-[-2rem] h-[35rem] w-[33rem] max-w-none"
                    src={fotoDefault}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[0.4rem] left-[0.2rem] md:top-[1rem] md:left-[0.5rem] z-[0] bg-black h-[7rem] md:h-[17rem] w-[10rem] md:w-[21rem] overflow-hidden rounded-tr-[999px] rounded-tl-[999px] rounded-br-[0px] rounded-bl-[999px]"></div>
            </div>
          </div>
          <div className="flex">
            <div className="relative h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] m-2">
              <div className="absolute h-full w-full border-[1px] md:border-[6px] z-[1] border-black overflow-hidden rounded-tr-[0px] rounded-tl-[999px] rounded-br-[999px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    // className="absolute left-[0rem] top-[-5rem] h-[20rem] max-w-none "
                    src={fotoDefault}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[0.5rem] left-[0.2rem] md:top-[1rem] md:left-[0.5rem] z-[0] bg-black h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] overflow-hidden rounded-tr-[0px] rounded-tl-[999px] rounded-br-[999px] rounded-bl-[999px]"></div>
            </div>
            <div className="relative h-[7rem] w-[7rem] md:h-[13rem] md:w-[13rem] m-2">
              <div className="absolute h-full w-full border-[1px] md:border-[6px] z-[1] border-black overflow-hidden rounded-tr-[999px] rounded-tl-[0px] rounded-br-[999px] rounded-bl-[999px]">
                <div className="relative">
                  <img
                    // className="absolute left-[-4rem] h-[24rem] max-w-none "
                    src={fotoDefault}
                  ></img>
                </div>
              </div>
              <div className="absolute top-[0.5rem] left-[0.2rem] md:top-[1rem] md:left-[0.5rem] z-[0] bg-black h-[7rem] w-[7rem] md:h-[13rem] md:w-[13rem] overflow-hidden rounded-tr-[999px] rounded-tl-[0px] rounded-br-[999px] rounded-bl-[999px]"></div>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-[30rem] left-[41rem]">
          <img className="black" src={flecha}></img>
        </div>
        <div className="absolute top-[30rem] left-[41rem]">
          <img className="" src={flecha}></img>
        </div> */}
        <div className="absolute w-[37rem] z-[0]">
          <div className="relative">
            
            <img className="hidden md:block custom-spin absolute z-20 top-[5.5rem] left-[0.17rem] h-[28rem]"
              
              src={SolAmarillo}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

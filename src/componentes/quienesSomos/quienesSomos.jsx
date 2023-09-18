import React from "react";

import Contacto from "../inicio/contacto";

import euge from "../../assets/fotoEuge.jpg";

const QuienesSomos = () => {
  return (
    <div>
      <div className="flex justify-center mt-[1.6rem] mb-[13rem]">
        <div className="relative w-[33rem] h-[33rem]">
          <div className="absolute w-full h-full z-20 bg-[#BF9AF3] border-2 border-black">
            <div className="flex flex-col w-full h-full">
              <div className="p-2 text-5xl font-medium mb-5">
                Quienes Somos?
              </div>
              <img className="h-[23rem] w-[23rem] m-5" src={euge}></img>
            </div>
          </div>
          <div className="absolute z-40 bottom-[0.6rem] right-[0.6rem] w-[18rem] h-[15rem] bg-[#EF7E98] border-2 border-black">
            <div className="flex flex-col">
              <div className="text-3xl p-2">Euge</div>
              <div className="text-sm p-2 font-secundario">
                Uet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asp
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0.3rem] right-[0.3rem] z-30 w-[18rem] h-[15rem] bg-[#EF7E98] border-2 border-black"></div>
          <div className="absolute top-[0.3rem] left-[0.3rem] w-[33rem] z-10 h-[33rem] bg-[#BF9AF3] border-2 border-black"></div>
        </div>
      </div>
      <Contacto />
    </div>
  );
};

export default QuienesSomos;

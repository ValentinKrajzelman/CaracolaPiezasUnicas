import React from "react";

import maps from "/mapsCC.png";
import quienesSomos from "/quienesSomos.jpg";

const Hogares = () => {
  return (
    <div>
      <div className="flex my-28 items-center justify-center">
        <div className="relative w-[70rem] h-[40rem]">
          <div className="absolute border-2 border-black w-full h-full z-20 bg-[#EF7E98]">
            <div className="h-[45%] w-full">
              <div className="flex justify-center pt-2 text-5xl font-medium">
                Los hogares
              </div>
              <div className="flex justify-between align-middle items-center h-full">
                <div className="flex flex-col ml-[5rem] mb-[3rem] items-center ">
                  <div className="flex items-center ">
                    <div className="text-lg">Hogar Padre Cajade</div>
                    <div className="pl-2">643 e/12 y 13</div>
                  </div>
                  <div className="relative w-[20rem] h-[10rem] border-2 border-black overflow-hidden">
                    <img
                      className="absolute w-[20rem] top-[-2rem]"
                      src={maps}
                    ></img>
                  </div>
                </div>
                <div className="flex flex-col mr-[5rem] mb-[3rem] items-center ">
                  <div className="flex items-center ">
                    <div className="text-lg">Hogar Padre Cajade</div>
                    <div className="pl-2">643 e/12 y 13</div>
                  </div>
                  <div className="relative w-[20rem] h-[10rem] border-2 border-black overflow-hidden">
                    <img
                      className="absolute w-[20rem] top-[-2rem]"
                      src={maps}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[55%] w-full">
              <div className="absolute h-full w-[69.9rem] top-[-0.5rem] left-[-0.6rem] z-20 bg-[#BF9AF3] border-2 border-black">
                <div className="flex justify-between">
                  <div className="flex flex-col ml-[5rem] mt-3 w-[30rem]">
                    <div className="text-4xl mb-10">Cosas que expliquen lo que se hace en los hogares</div>
                    <div className="">Cosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogaresCosas que expliquen lo que se hace en los hogares</div>
                  </div>
                  <div className="relative w-[20rem] mr-[5rem] mt-3"><img className="absolute w-[20rem]" src={quienesSomos}></img></div>
                </div>
              </div>
              <div className="absolute h-full w-[69.9rem] top-[-0.2rem] left-[-0.3rem] z-10 bg-[#BF9AF3] border-2 border-black"></div>
            </div>
          </div>
          <div className="absolute border-2 border-black top-[0.3rem] left-[0.3rem] z-10 w-full h-full bg-[#EF7E98]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hogares;

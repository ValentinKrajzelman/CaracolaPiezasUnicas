import React from "react";
import { useSelector } from "react-redux";
import { Accordion, Label, TextInput, Card, Carousel } from "flowbite-react";

import TarjetaCentros from "./tarjetaCentros";

import comoProducimos from "../../assets/comoProducimos.jpg";
import quienesSomos from "../../assets/quienesSomos.jpg";

const Inicio = () => {

  const eventos = useSelector((state)=>{state.eventos.eventos});  

  //   const selectorcontroller = ()=>{
  //   console.log(eventos);
  // }

  return (
    <div>
    {/* <button onClick={selectorcontroller}>aca!</button> */}
      {/* calesita grande */}
      <div className="h-[35rem] py-5 ">
        <Carousel>
          {/* <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          /> */}
          {eventos}
          
        </Carousel>
      </div>
      <div className="flex flex-row justify-between ">
        {/* calesita chica */}
        <div className="h-[30rem] pr-5 grow">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <div>cosas</div>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>

        {/* tarjeta eventos */}
          <Card className="h-[30rem] w-[25rem]">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Eventos
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Ver todos
              </a>
            </div>
            <div className="h-[25rem] overflow-y-auto">
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                {/* cada uno de estos elementos serian eventos que se carguen desde el dashboard */}
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4 bg-slate-200 hover:bg-slate-400 rounded-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-[25%] border-r-[1px] border-black border-solid p-2 text-sm">
                      12/3 14:00hs a 17:00hs
                    </div>
                    <div className="flex flex-col w-[75%]">
                      <div className="pt-2 ">
                        Feria en el hogar padre cajada
                      </div>
                      <div>7 e/148 y 149 villa elvira</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            </div>
          </Card>
      </div>

      {/* quienes somos*/}
      <div className="flex h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <div>
          <div className="text-5xl pt-5 pr-5">Quienes Somos</div>
          <div className="text-xl pt-5 pr-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            veritatis exercitationem suscipit animi provident quibusdam
            recusandae repellat culpa, quos beatae modi, ipsa natus obcaecati.
            Tenetur similique molestiae vel esse dolores?
          </div>
        </div>
        <img src={quienesSomos} alt="" className="max-h-[100%] p-5" />
      </div>

      <div className="flex flex-row h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <img src={comoProducimos} alt="" className="max-h-[100%]" />
        <div>
          <div className="text-5xl pt-5 pl-5">como producimos</div>
          <div className="text-xl pt-5 pl-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            veritatis exercitationem suscipit animi provident quibusdam
            recusandae repellat culpa, quos beatae modi, ipsa natus obcaecati.
            Tenetur similique molestiae vel esse dolores?
          </div>
        </div>
      </div>

      {/* centros */}
      <div className="p-5">
        <div className="p-5 text-2xl ">Centros</div>
        <div className="p-5 ">
          Los lugares en los que estamos y hacemos actividades.
        </div>
        <div className="flex flex-row justify-between">
          <TarjetaCentros />
          <TarjetaCentros />
          <TarjetaCentros />
        </div>
      </div>

      {/* FAQ */}
      <div>
        <Accordion alwaysOpen={true}>
            <Accordion.Panel>
                <Accordion.Title>
                    What is Flowbite?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{' '}
                        <a
                            href="https://flowbite.com/docs/getting-started/introduction/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            get started
                        </a>
                        {' '}and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    Is there a Figma file available?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the{' '}
                        <a
                            href="https://flowbite.com/figma/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Figma design system
                        </a>
                        {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    What are the differences between Flowbite and Tailwind UI?
                </Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                            <a
                                href="https://flowbite.com/pro/"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Flowbite Pro
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tailwindui.com/"
                                rel="nofollow"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Tailwind UI
                            </a>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion></div>
    </div>
  );
};

export default Inicio;

import React from 'react'

const QuienesSomos = () => {
  return (
    <div>
    
          <div className="flex h-56 sm:h-64 xl:h-80 2xl:h-96 ">
            <div>
              <div className="text-5xl pt-5 pr-5">Quienes Somos</div>
              <div className="text-xl pt-5 pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam veritatis exercitationem suscipit animi provident
                quibusdam recusandae repellat culpa, quos beatae modi, ipsa
                natus obcaecati. Tenetur similique molestiae vel esse dolores?
              </div>
            </div>
            <img src={quienesSomos} alt="" className="max-h-[100%] p-5" />
          </div>

          <div className="h-[30rem] w-full  pr-5 "></div>

    </div>
  )
}

export default QuienesSomos
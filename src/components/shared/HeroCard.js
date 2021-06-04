import React from 'react'

function HeroCard({ image, category, topic, title, button }) {
    return (
        <div className="hero__card relative px-6 py-4 overflow-hidden ">
        <a href="#" className="absolute inset-0 z-10"></a>
        <div
          className="bg-center hero__card-bg background-image absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div className="flex flex-col justify-end h-full text-white space-y-4">
          <div className="flex relative z-10 space-x-6">
            <a
              href="#"
              className=" font-bold block uppercase tracking-widest hover:underline "
            >
              <span>{category} </span>
            </a>
            <a
              href="#"
              className=" font-light block uppercase tracking-widest hover:underline"
            >
              <span>{topic} </span>
            </a>
          </div>
          <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold relative">
           {title}
          </h1>

          <button className="uppercase font-medium flex items-center space-x-2 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span> {button} </span>
          </button>
        </div>
      </div>
    )
}

export default HeroCard

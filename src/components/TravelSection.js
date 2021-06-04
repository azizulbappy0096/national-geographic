import React from "react";
import SectionTitle from "./SectionTitle";
import Promo from "./shared/Promo";
import SecondaryCard from "./shared/SecondaryCard";

const promoData = [
  {
    title: {
      text: "Updates on the coronavirus pandemic",
      link: "#",
    },
    subtitle: {
      text: "",
      link: "#",
    },
    subject: {
      text: "",
      link: "#",
    },
    partner: false,
    image: "/images/corona-virus.webp",
  },
  {
    title: {
      text: "The myths and mystique of Japan's national parks",
      link: "#",
    },
    subtitle: {
      text: "",
      link: "#",
    },
    subject: {
      text: "",
      link: "#",
    },
    partner: true,
    image: "/images/scenario.webp",
  },
  {
    title: {
      text: "Thousands lost everything in the Tulsa Race Massacre—including my family.",
      link: "#",
    },
    subtitle: {
      text: "Race in America",

      link: "#",
    },
    subject: {
      text: "History & Culture",
      link: "#",
    },
    partner: false,
    image: "/images/J.B_OG.jpg",
  },
  {
    title: {
      text: "A grave humanitarian crisis is unfolding in Ethiopia. ‘I never saw hell before, but now I have.’",
      link: "#",
    },
    subtitle: {
      text: "",
      link: "#",
    },
    subject: {
      text: "History & Culture",
      link: "#",
    },
    partner: false,
    image: "/images/men.webp",
  },
  {
    title: {
      text: "8 red wolves released into wild provide hope",
      link: "#",
    },
    subtitle: {
      text: "",
      link: "#",
    },
    subject: {
      text: "animals",
      link: "#",
    },
    partner: false,
    image: "/images/wolf.webp",
  },
  {
    title: {
      text: "An earthquake lasted 32 years, and scientists want to know how",
      link: "#",
    },
    subtitle: {
      text: "",
      link: "#",
    },
    subject: {
      text: "science",
      link: "#",
    },
    partner: false,
    image: "/images/graphic.jpg",
  },
];

const secondaryCardData = [
  {
    title: "The facts behind Memorial Day's controversial history",
    subject: {
      text: "Culture",
      link: "#",
    },
    image: "/images/hero-memorial.webp",
  },
  {
    title: "The unlikely rise of antkeeping",
    subject: {
      text: "Animals",
      link: "#",
    },
    image: "/images/hero-ant.webp",
  },
];

function TravelSection() {
  return (
    <div className="px-4 lg:px-44 py-4 my-4 relative ">
      <SectionTitle title="travel" />

      <div className="xl:grid grid-cols-3 gap-8 z-10 relative">
        <div className="grid grid-cols-1 col-span-2 gap-4">
          {/*  */}
          <div className="hero__card relative px-6 py-4 overflow-hidden ">
            <a href="#" className="absolute inset-0 z-10"></a>
            <div
              className="bg-center hero__card-bg background-image absolute inset-0"
              style={{
                backgroundImage: "url(/images/hero-megazine.webp)",
              }}
            ></div>

            <div className="flex flex-col justify-end h-full text-white space-y-4">
              <div className="flex relative z-10 space-x-6">
                <a
                  href="#"
                  className=" font-bold block uppercase tracking-widest hover:underline "
                >
                  <span>magazine</span>
                </a>
                <a
                  href="#"
                  className=" font-light block uppercase tracking-widest hover:underline"
                >
                  <span>Race in America </span>
                </a>
              </div>
              <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold relative">
                {" "}
                ‘The savings of a lifetime were reduced to ashes’{" "}
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
                <span> Book a trip </span>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          {secondaryCardData.map((data, index) => (
            <SecondaryCard key={index} data={data} />
          ))}
          </div>
          
        </div>

        <div className="my-10 xl:my-0 ">
          <div className="uppercase text-white border-l-4 border-custom-yellow mb-6">
            <h2 className="text-4xl ml-4"> Latest stories </h2>
          </div>
     
          <Promo data={promoData} />
       
        </div>
      </div>
    
        <div className="absolute inset-0 z-0 h-4/6">
          <span className="background-image block h-full" style={{
            backgroundImage: "url(/images/travel-bg.webp)",
            opacity: 0.9
          }}></span>
          <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(-180deg,transparent,#000)"}}></div>
        </div>
    </div>
  );
}

export default TravelSection;

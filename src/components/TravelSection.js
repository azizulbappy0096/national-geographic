import React from "react";
import SectionTitle from "./SectionTitle";
import Promo from "./shared/Promo";
import SecondaryCard from "./shared/SecondaryCard";
import { travelSection } from "./shared/data"
import HeroCard from "./shared/HeroCard";

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
        <HeroCard
            image="/images/travel/wild-wonder.webp"
            title="‘Explore Alaska’s Wild Wonders’"
            button="book a trip"
          />
          {/*  */}
          
          
          {/*  */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          {travelSection.promoCard.map((data, index) => (
            <SecondaryCard key={index} data={data} />
          ))}
          </div>
          
        </div>

        <div className="my-10 xl:my-0 ">
          <div className="uppercase text-white border-l-4 border-custom-yellow mb-6">
            <h2 className="text-4xl ml-4"> Latest stories </h2>
          </div>
     
          <Promo data={travelSection.promoData} />
       
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

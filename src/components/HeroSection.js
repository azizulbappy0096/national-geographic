import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import HeroCard from "./shared/HeroCard";
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

const promoMagazine = [
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

function HeroSection() {
  return (
    <div className="hero px-4 lg:px-32 my-8">
      <SectionTitle title="LATEST STORIES" />

      <div className="xl:grid grid-cols-3 gap-8">
        <div className="grid grid-cols-1 col-span-2 gap-4">
          {/*  */}
          <HeroCard
            image="/images/hero-megazine.webp"
            category="magazine"
            topic="Race in America"
            title="‘The savings of a lifetime were reduced to ashes’"
            button="read"
          />
          
          {/*  */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
            {promoMagazine.map((data, index) => (
              <SecondaryCard key={index} data={data} />
            ))}
          </div>
        </div>

        <div className="my-10 xl:my-0 col-start-1 row-start-1">
          <div className="uppercase text-white border-l-4 border-custom-yellow mb-6">
            <h2 className="text-4xl ml-4"> TODAY'S PICKS </h2>
          </div>

          <Promo data={promoData} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

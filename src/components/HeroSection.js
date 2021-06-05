import React from "react";
import SectionTitle from "./SectionTitle";
import HeroCard from "./shared/HeroCard";
import Promo from "./shared/Promo";
import SecondaryCard from "./shared/SecondaryCard";
import { heroSection } from "./shared/data"

function HeroSection() {
  return (
    <div className="hero px-4 lg:px-32 my-8">
      <SectionTitle title="LATEST STORIES" />

      <div className="xl:grid grid-cols-3 gap-8">
        <div className="grid grid-cols-1 col-span-2 gap-4">
          {/*  */}
          <HeroCard
            image="/images/hero-card.jpg"
            category="environment"
            title="The Arctic National Wildlife Refuge just got a reprieve—but it’s not safe yet"
            button="read"
          />
          
          {/*  */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
            {heroSection.promoCard.map((data, index) => (
              <SecondaryCard key={index} data={data} />
            ))}
          </div>
        </div>

        <div className="my-10 xl:my-0 col-start-1 row-start-1">
          <div className="uppercase text-white border-l-4 border-custom-yellow mb-6">
            <h2 className="text-4xl ml-4"> TODAY'S PICKS </h2>
          </div>

          <Promo data={heroSection.promoData} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

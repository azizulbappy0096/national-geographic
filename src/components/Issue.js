import React from "react";
import SectionTitle from "./SectionTitle";
import HeroCard from "./shared/HeroCard";
import Promo from "./shared/Promo";
import SecondaryCard from "./shared/SecondaryCard";
import { issueSection } from "./shared/data"

function Issue() {
  return (
    <div className="px-4 lg:px-44 py-4 my-4">
      <SectionTitle title="JUNE 2021 ISSUE">
        <div>
          <p className="text-lg">
            <a
              href="#"
              className="fitt-tracker border-custom-yellow capitalize border-b-4 inline-block tracking-wider text-lg font-medium hover:text-black mt-6"
            >
              Subscribe
            </a>{" "}
            to see the stories from National Geographic magazine
          </p>
        </div>
      </SectionTitle>
      <div className="xl:grid grid-cols-3 gap-8 z-10 relative">
        <div className="grid grid-cols-1 col-span-2 gap-4">
          {/*  */}
          <HeroCard
            image="/images/issues/mob.jpg"
            category="magazine"
            topic="Race in America"
            title="Tulsa finally confronts the day a white mob destroyed a Black community"
            button="read"
          />

          
          {/*  */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          {issueSection.promoCard.map((data, index) => (
            <SecondaryCard key={index} data={data} />
          ))}
          </div>
          
        </div>

        <div className="my-10 xl:my-0 ">
          <div className="uppercase text-white border-l-4 border-custom-yellow mb-6">
            <h2 className="text-4xl ml-4"> IN THIS ISSUE </h2>
          </div>
     
          <Promo data={issueSection.promoData} />
       
        </div>
      </div>
    </div>
  );
}

export default Issue;

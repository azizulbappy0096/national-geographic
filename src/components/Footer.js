import React from "react";

//
const footerData = {
  legalData: {
    title: "Legal",
    list: [
      {
        text: "Terms of Use",
        link: "#",
      },
      {
        text: "Privacy Policy",
        link: "#",
      },
      {
        text: "Your California Privacy Rights",
        link: "#",
      },
      {
        text: "Children's Online Privacy Policy",
        link: "#",
      },
      {
        text: "Interest-Based Ads",
        link: "#",
      },
      {
        text: "About Nielsen Measurement",
        link: "#",
      },
      {
        text: "Do Not Sell My Info",
        link: "#",
      },
    ],
  },
  site: {
    title: "OUR SITES",
    list: [
      {
        text: "Nat Geo Home",
        link: "#",
      },
      {
        text: "Attend a Live Event",
        link: "#",
      },
      {
        text: "Book a Trip",
        link: "#",
      },
      {
        text: "Buy Maps",
        link: "#",
      },
      {
        text: "Inspire Your Kids",
        link: "#",
      },
      {
        text: "Shop Nat Geo",
        link: "#",
      },
      {
        text: "Visit the D.C. Museum",
        link: "#",
      },
      {
        text: "Watch TV",
        link: "#",
      },
      {
        text: "Support our Mission",
        link: "#",
      },
      {
        text: "Nat Geo Partners",
        link: "#",
      },
      {
        text: "Masthead",
        link: "#",
      },
      {
        text: "Press Room",
        link: "#",
      },
      {
        text: "Advertise With Us",
        link: "#",
      },
    ],
  },
  join: {
    title: "Join Us",
    list: [
      {
        text: "Subscribe",
        link: "#",
      },
      {
        text: "Customer Service",
        link: "#",
      },
      {
        text: "Renew Subscription",
        link: "#",
      },
      {
        text: "Manage Your Subscription",
        link: "#",
      },
      {
        text: "Work at Nat Geo",
        link: "#",
      },
      {
        text: "Sign up for Our Newsletters",
        link: "#",
      },
      {
        text: "Contribute to Protect the Planet",
        link: "#",
      },
      {
        text: "Pitch a Story",
        link: "#",
      },
    ],
  },
};

//

const RenderMenu = ({ data }) => {
  return (
    <div className="text-white">
      <h6 className="uppercase font-semibold text-base tracking-widest">
        {data.title}
      </h6>
      <ul className="mt-4 space-y-2">
        {data.list.map((item) => (
          <li>
            {" "}
            <a href={item.link} className="text-sm hover:underline">
              {item.text}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

function Footer() {
  return (
    <div className=" py-4">
      <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <RenderMenu data={footerData.legalData} />
        <RenderMenu data={footerData.site} />
        <RenderMenu data={footerData.join} />
        <div className="text-white">
          <h6 className="uppercase font-semibold text-base tracking-widest">
            Follow Us
          </h6>
          <ul className="flex mt-4 space-x-4">
            <li>
              <button>
                <i className="text-3xl fab fa-facebook-square hover:text-yellow-300"></i>
              </button>
            </li>
            <li>
              <button>
                <i className="text-3xl fab fa-twitter hover:text-yellow-300"></i>
              </button>
            </li>
            <li>
              <button>
                <i className="text-3xl fab fa-instagram hover:text-yellow-300"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    
        <div className="p-4 border-t-2 border-gray-400 flex justify-between items-center">
            <div className="">
            <img className="hidden md:block" src="/logo-white.webp" alt="logo" />
            <img className="block md:hidden" src="/logo-sm.png" alt="logo" />
            </div>
            <div className="text-gray-500 text-sm ">
                <p> Copyright © Coded by Azizul Bappy </p>
                <p> Copyright © Original site: <a href="https://www.nationalgeographic.com/" className="hover:underline"> National Geographic </a> </p>
            </div>
        </div>
    </div>
  );
}

export default Footer;

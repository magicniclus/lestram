"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const LeftTextSection = (props) => {
  const title = props.data.title;
  const description = props.data.description;
  const list = props.data.list;
  const img = props.data.img;
  const imgAlt = props.data.imgAlt;
  const logo = props.data.logo;

  return (
    <section className="mt-24 w-full mx-auto max-w-7xl flex lg:flex-row flex-col bg-blue-200 justify-between min-h-[200px] lg:items-end items-center z-10">
      <div className=" w-full flex lg:flex-row flex-col mx-auto min-h-[550px]">
        <div className="lg:w-3/6 w-full flex justify-start lg:justify-bottom items-end relative">
          <img
            src={logo}
            alt="bulle"
            className="absolute -top-14 lg:top-0 right-[62%] lg:right-[10%] w-4/12 object-cover"
          />
          <img
            src={img}
            alt={imgAlt}
            className="lg:w-11/12 w-full h-auto min-h-[450px] max-h-[450px] object-cover"
          />
        </div>
        <div className="lg:w-5/12 w-11/12 flex justify-center flex-col lg:mx-0 mx-auto lg:mt-0 mt-14">
          <h2 className="text-3xl text-blue lg:max-w-[70%] font-raleway font-bold">
            {title}
          </h2>
          <h3 className="lg:text-3xl text-2xl text-or font-vidaloka">
            {description}
          </h3>
          <ul className="list-disc list-inside text-blue mt-7">
            {list.map((item, index) => {
              const itemWithSuperscript = item.replace("m^2", "m<sup>2</sup>");

              return (
                <li
                  key={index}
                  className="text-lg list-none font-semibold mt-2 font-raleway"
                >
                  <ChevronRightIcon className="inline-block w-4 h-4 mr-2 text-blue" />
                  <span
                    dangerouslySetInnerHTML={{ __html: itemWithSuperscript }}
                  />
                </li>
              );
            })}
          </ul>
          <a
            href="#form"
            className={`mx-auto rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 bg-or w-max mb-7 font-raleway`}
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeftTextSection;

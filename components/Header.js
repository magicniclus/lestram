"use client";
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="w-full mx-auto max-w-7xl pt-3 flex lg:flex-row flex-col bg-blue-200 justify-between  lg:items-end items-center z-10">
      <div className="lg:w-3/6 w-full flex justify-center">
        <img
          src="/images/logos/logo.png"
          alt="signature"
          className="lg:max-w-[50%] max-w-[250px] h-auto"
        />
      </div>
      <div className="lg:w-5/12 w-content px-5 lg:px-0 py-3 lg:mt-0 mt-5 bg-or flex justify-center items-center  relative after:lg:absolute after:lg:w-full after:lg:h-24 after:lg:-bottom-24 after:lg:-left-0 after:lg:content-[''] after:lg:bg-or ">
        <a href="tel:0556367038" className="flex items-center">
          <PhoneIcon
            className="h-6 lg:h-8 w-auto text-blue"
            aria-hidden="true"
          />
        </a>
        <a
          href="tel:0556367038"
          className="text-white lg:text-4xl text-2xl ml-3 font-semibold font-lato"
        >
          05 56 36 70 38
        </a>
      </div>
    </div>
  );
};

export default Header;

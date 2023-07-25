import React from "react";

const Banner = () => {
  return (
    <section className="mt-24 w-full mx-auto max-w-7xl flex sm:flex-row flex-col bg-blue-200 justify-between lg:items-end items-center z-10 bg-blue px-7 py-9">
      <div className="flex lg:flex-row flex-col lg:text-start text-center items-center lg:items-start text-white sm:max-w-[20%] mx-w-[60%] sm:mt-0 mt-14">
        <img
          src="images/logos/logo_house.png"
          alt="house"
          className="object-contain w-14 sm:mt-0 mb-5"
        />
        <h2 className="ml-5 text-xl font-light font-raleway">
          Investissez dans une construction{" "}
          <span className="font-bold">DURABLE</span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:text-start text-center items-center lg:items-start text-white sm:max-w-[20%] mx-w-[60%] sm:mt-0 mt-14">
        <img
          src="images/logos/hogo_handshake.png"
          alt="house"
          className="object-contain w-14 sm:mt-0 mb-5"
        />
        <h2 className="ml-5 text-xl font-light font-raleway">
          Optez pour un acteur de <span className="font-bold">PROXIMITÉ</span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:text-start text-center items-center lg:items-start text-white sm:max-w-[25%] mx-w-[60%] sm:mt-0 mt-14">
        <img
          src="images/logos/logo_smile.png"
          alt="house"
          className="object-contain w-14 sm:mt-0 mb-5"
        />
        <h2 className="ml-5 text-xl font-light font-raleway">
          Appropriez-vous des des espaces conçus pour{" "}
          <span className="font-bold">VIVRE HEUREUX</span>
        </h2>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";

const BrochureBanner = () => {
  return (
    <section className="mt-14 w-full mx-auto max-w-7xl flex sm:flex-row flex-col bg-blue-200 justify-between items-center z-10 bg-blue lg:max-h-[450px] overflow-hidden">
      <div className="px-3 lg:px-7 py-10 lg:py-0 w-full lg:w-1/2">
        <h2 className="text-3xl mb-14 font-bold font-raleway text-white leading-loose">
          Décrouvrir les <br />
          appartements <br />
          <span className="text-or">L'ESTRAN</span>
        </h2>
        <a
          href="#form"
          className={`mx-auto rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-or w-max mb-7 font-raleway`}
        >
          Demander la brochure
        </a>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="/images/background/house.png"
          alt="maison"
          className="h-auto"
        />
      </div>
    </section>
  );
};

export default BrochureBanner;

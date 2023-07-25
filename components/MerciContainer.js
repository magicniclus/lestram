import React from "react";

const MerciContainer = () => {
  return (
    <section
      className="min-h-[calc(100vh-150px)] w-full mx-auto max-w-7xl mt-10 lg:mt-0 p-0 sm:p-10 flex justify-center items-center"
      style={{ zIndex: "100" }}
    >
      <div className="min-h-[calc(100vh-150px)] w-full bg-blue flex justify-center items-center">
        <div className="p-10 bg-blue text-center">
          <h1 className="text-white text-4xl font-light text-center font-vidaloka">
            Merci,
          </h1>
          <h2 className="text-white text-2xl font-raleway mt-5">
            Votre message a bien été envoyé.
          </h2>
          <p className="text-white text-2xl font-raleway mt-5">
            Nous vous recontacterons dans les plus brefs délais.
          </p>
          <a
            href="https://www.signature-promotion.fr/"
            className="text-white text-2xl font-raleway mt-5 inline-block"
          >
            Pour retourner à l'accueil,{" "}
            <span className="text-or font-vidaloka">cliquez ici</span>.
          </a>
        </div>
      </div>
    </section>
  );
};

export default MerciContainer;

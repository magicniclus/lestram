import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full mx-auto max-w-7xl flex lg:flex-row flex-col bg-blue-200 justify-between min-h-[100px] items-center z-10 border-t-2 border-blue">
      <div className="lg:w-11/12 w-full flex lg:flex-row flex-col mx-auto justify-between">
        <img
          src="images/logos/logo.png"
          alt="signature-promotion"
          className="h-14 object-contain lg:mt-0 mt-5"
        />
        <div className="flex lg:flex-row flex-col lg:mt-0 mt-5 lg:justify-normal justify-center items-center lg:mb-0 mb-5 text-blue">
          <p>©Signature Promotion 2023 | </p>
          <a
            href="https://www.signature-promotion.fr/mentions-legales/"
            className="ml-1 cursor-pointer"
            target="_blank"
          >
            {" "}
            Mentions légales |
          </a>
          <a href="#form" className="ml-1 cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

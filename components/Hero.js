"use client";
import React, { useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { writeUserData } from "../firebase/dataManager";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  const isValidName = (name) => /^[a-zA-Z]{2,}$/.test(name);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^(\+33|0)[1-9](\d{2}){4}$/.test(phone);

  useEffect(() => {
    if (
      isValidName(firstname) &&
      isValidName(lastname) &&
      isValidEmail(email) &&
      isValidPhone(phone) &&
      gender !== "" &&
      acceptsTerms
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [firstname, lastname, email, phone, gender, acceptsTerms]);

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = generateUniqueId();
    writeUserData(userId, lastname, firstname, email, phone, gender)
      .then((success) => {
        router.push("/merci");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="mt-7 w-full mx-auto max-w-7xl flex lg:flex-row flex-col bg-blue-200 justify-between min-h-[200px] lg:items-end items-center z-10">
      <div className="lg:w-11/12 w-full flex lg:flex-row flex-col mx-auto">
        <div className="lg:w-3/6 w-full pr-3 py-3 flex flex-col items-center justify-between ">
          <h1 className="text-3xl font-light text-blue text-center font-raleway ">
            DEVENEZ PROPRIÉTAIRE D'UNE MAISON NEUVE À{" "}
            <span className="text-or font-vidaloka">BREUILLET (17920)</span>
          </h1>
          <img
            className="max-w-[45%] mt-5 lg:mt-0"
            src="./images/logos/logo_cambium.png"
          />
          <h2 className="text-or text-4xl font-light text-center mt-5 lg:mt-0 font-vidaloka">
            UNIQUE & EXCEPTIONNEL SUR <br />
            <span className="text-5xl font-extrabold font-raleway">
              LA CÔTE DE BEAUTÉ
            </span>
          </h2>
        </div>
        <div
          id="form"
          className="bg-blue min-h-full lg:w-3/6 w-full px-10 py-7 mt-5 lg:mt-0"
        >
          <h2 className="text-or text-2xl font-raleway">
            Vous souhaitez en savoir plus ?<br />
            <span className="text-white inline-block text-2xl font-raleway font-extrabold">
              Envoyez-nous vos coordonnées et on vous rappelle très vite !
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between flex-col lg:flex-row mt-7">
              <div className="lg:w-5/12 w-full max-w-[450px]">
                <label
                  htmlFor="lastname"
                  className="block text-lg font-medium leading-6 text-white font-raleway"
                >
                  Nom*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-raleway"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="lg:w-5/12 w-full max-w-[450px] lg:mt-0 mt-7">
                <label
                  htmlFor="thirstname"
                  className="block text-lg font-light leading-6 text-white font-raleway"
                >
                  Prenom*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-raleway"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row mt-7">
              <div className="lg:w-5/12 w-full max-w-[450px]">
                <label
                  htmlFor="email"
                  className="block text-lg font-light leading-6 text-white font-raleway"
                >
                  Email*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-raleway"
                    placeholder="johnedoe@exemple.com"
                  />
                </div>
              </div>
              <div className="lg:w-5/12 w-full max-w-[450px] lg:mt-0 mt-7">
                <label
                  htmlFor="phone"
                  className="block text-lg font-light leading-6 text-white font-raleway"
                >
                  Phone*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-raleway"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-7">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="madame"
                    name="gender"
                    type="checkbox"
                    onChange={() => setGender("Madame")}
                    checked={gender === "Madame"}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 font-raleway"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-light text-white ml-2 font-raleway"
                  >
                    Madame
                  </label>
                </div>
              </div>
              <div className="relative flex items-start ml-10">
                <div className="flex h-6 items-center">
                  <input
                    id="monsieur"
                    name="gender"
                    type="checkbox"
                    onChange={() => setGender("Monsieur")}
                    checked={gender === "Monsieur"}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 font-raleway"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-white  ml-2 font-raleway"
                  >
                    Monsieur
                  </label>
                </div>
              </div>
            </div>
            <div className=" mt-7">
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="acceptsTerms"
                    name="acceptsTerms"
                    type="checkbox"
                    onChange={() => setAcceptsTerms(!acceptsTerms)}
                    checked={acceptsTerms}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 font-raleway"
                  />
                </div>
                <div className="text-xs leading-6 leading-1">
                  <label
                    htmlFor="comments"
                    className="font-medium text-white ml-2 font-raleway"
                  >
                    J’accepte que mes données personnelles soient collectées
                    afin que SIGNATURE Promotion puisse me recontacter.*
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                disabled={buttonColor ? false : true}
                className={`rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-7 font-raleway ${
                  buttonColor ? "bg-or" : "bg-orLight"
                }`}
              >
                Envoyer
              </button>
              <p className="text-white mt-5 text-sm font-medium font-raleway">
                * Champs obligatoires
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

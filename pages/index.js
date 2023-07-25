import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoBanner from "../components/VideoBanner";
import LeftTextSection from "../components/LeftTextSection";
import RightTextSection from "../components/RightTextSection";
import Comments from "../components/Comments";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";

const dataOne = {
  title: "BREUILLET (17920)",
  description: "ESPRIT VILLAGE ET NATURE PRÉSERVÉS",
  list: [
    "Adresse en centre-bourg avec tous les commerces et services accessibles à pied",
    "Plages de sable fin à 10 minutes",
    "Plus Beau Village de France® à 3 km",
    "Au cœur de la presqu’île d’Arvert avec ses marais salants, aigrettes, hérons cendrés...",
    "Commune constituée de 25% d’espaces boisés",
    "À proximité de Royan (10 km)",
  ],
  img: "/images/background/MARAIS-BREUILLET.jpg",
  imgAlt: "maison",
  logo: "/images/logos/bulle_privilegie.png",
};
const dataTwo = {
  title: "VOTRE MAISON SUR LA CÔTE",
  description: "À PRIX TOUT DOUX",
  list: [
    "Résidence principale, secondaire, investissement patrimonial",
    "Frais de notaire réduits : de l’ordre de 2 à 3% du prix de vente",
    "Aucune mauvaise surprise et pas de travaux supplémentaires à financer (sauf à votre demande)",
  ],
  img: "/images/background/background_house2.png",
  imgAlt: "maison",
  logo: "/images/logos/bulle_budget.png",
};
const dataThree = {
  title: "LE CONFORT DU NEUF",
  description: "UNE INVITATION À POSER VOS VALISES",
  list: [
    "Maisons à étage de 3 ou 4 pièces",
    "Finitions soignées et garanties du neuf",
    "Salle de bains entièrement équipée",
    "Volumes généreux et lumineux",
    "Jardin privatif planté, clôturé et aménagé avec une terrasse en bois",
    "Garage attenant aux maisons 4 pièces",
  ],
  img: "/images/background/backgroud_house3.png",
  imgAlt: "maison",
  logo: "/images/logos/bulle_piece.png",
};

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          CAMBIUM | Maison neuve à BREUILLET disponible et proposé par signature
          promotion
        </title>
        <meta
          name="description"
          content="Cambium, la nouvelle résidence disponible à BREUILLET. Maison neuve à partir de 250000€. Contactez-nous pour plus d'informations."
        />
        <link
          rel="icon"
          href="https://www.signature-promotion.fr/wp-content/themes/signature/images/favicon.ico"
        />
      </Head>
      <Header />
      <main className="flex flex-col z-50">
        <Hero />
        <VideoBanner />
        <LeftTextSection data={dataOne} />
        <RightTextSection data={dataTwo} />
        <LeftTextSection data={dataThree} />
        <Banner />
        <Comments />
      </main>
      <Footer />
      <Cookies />
    </div>
  );
}

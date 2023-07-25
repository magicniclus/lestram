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
import BrochureBanner from "../components/BrochureBanner";

const dataOne = {
  title: "GUJAN-MESTRAS (33470)",
  description:
    "VILLE AUX 7 PORTS ET CAPITALE DE L’OSTRÉICULTURE DU BASSIN D’ARCACHON",
  list: [
    "Tous les commerces, services, places des marchés et la gare à moins de 10 min. à vélo",
    "Plages, ports et cabanes à huîtres à 15 min. à pied",
    "220 km de pistes cyclables aménagés autour du Bassin pour se déplacer en toute sécurité au départ de Gujan-Mestras",
    "Arcachon et Dune du Pilat à 20 min. en voiture",
  ],
  img: "/images/background/house3.png",
  imgAlt: "maison",
  logo: "/images/logos/bulle_privilegie.png",
};
const dataTwo = {
  title: "HAVRE DE PAIX",
  description: "À TAILLE HUMAINE",
  list: [
    "Petite copropriété de 14 appartements dans un cadre de vie paisible et serein",
    "Extérieurs privatifs sans vis à vis et équipés de brise-vues",
    "Résidence clôturée, stationnements privatifs et accès sécurisés",
  ],
  img: "/images/background/house.png",
  imgAlt: "maison",
  logo: "/images/logos/bulle_budget.png",
};
const dataThree = {
  title: "LE CONFORT DU NEUF",
  description: "UNE INVITATION À POSER VOS VALISES",
  list: [
    "Appartements T2 de 51 m2",
    "Appartements T3 de 60 à 70 m2",
    "Finitions soignées et garanties du neuf",
    "Salle de bains entièrement équipée",
    "Espaces de vie traversants et généreux",
    "Jardin privatif planté, clôturé et aménagé avec une terrasse en bois pour les logements du rez-de-chaussée, loggias pour ceux de l’étage",
  ],
  img: "/images/background/house2.png",
  imgAlt: "maison",
  logo: "/images/logos/bulle_piece.png",
};

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          L'Estran | Maison neuve à Gujan Mestras disponible et proposé par
          signature promotion
        </title>
        <meta
          name="description"
          content="L'Estran, la nouvelle résidence disponible à Gujan-Mestras. Maison neuve à partir de 265000€. Contactez-nous pour plus d'informations."
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
        <BrochureBanner />
        <Comments />
      </main>
      <Footer />
      <Cookies />
    </div>
  );
}

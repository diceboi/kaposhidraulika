import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import HidraulikaHeroes from "./components/HidraulikaHeroes";
import Kapcsolat from "./components/Kapcsolat";
import Munkatarsak from "./components/Munkatarsak";
import Rolunk from "./components/Rolunk";
import Szolgaltatasok from "./components/Szolgaltatasok";
import Partnerek from "./components/Partnerek"


export async function generateMetadata() {

  return {
    alternates: {
      canonical: `https://www.kaposhidraulika.hu`
    },
    openGraph: {
      title: "Kapos Hidraulika - Szilutech Agro Kft.",
      description: "Hidraulika szervíz, javítás Somogy, Tolna, Baranya, Zala megyékben.",
      images: [
        {
          url: "https://www.kaposhidraulika.hu/ogimage.png",
          width: 1200,
          height: 630,
          alt: "Kapos Hidraulika - OpenGraph Image"
        }
      ]
    }
  }
  
}

export default function Home() {
  return (
    <>
    <Hero />
    <Szolgaltatasok />
    <HidraulikaHeroes />
    <Rolunk />
    <Kapcsolat />
    <Galeria />
    <Partnerek />
    </>
  );
}

import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import HidraulikaHeroes from "./components/HidraulikaHeroes";
import Kapcsolat from "./components/Kapcsolat";
import Munkatarsak from "./components/Munkatarsak";
import Rolunk from "./components/Rolunk";
import Szolgaltatasok from "./components/Szolgaltatasok";
import Partnerek from "./components/Partnerek"

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

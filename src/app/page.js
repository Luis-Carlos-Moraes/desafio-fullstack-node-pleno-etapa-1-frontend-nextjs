import Image from "next/image";
import { Navbar } from "./components/navbar";
import HeroCarousel from "./components/heroCarousel";
import Info from "./components/info";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroCarousel />
      <Info />
    </div>
  );
}

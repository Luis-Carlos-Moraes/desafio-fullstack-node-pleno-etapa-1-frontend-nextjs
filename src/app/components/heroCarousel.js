"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://picsum.photos/id/1015/1600/900",
  "https://picsum.photos/id/1016/1600/900",
  "https://picsum.photos/id/1018/1600/900",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (isMobile) {
    return (
      <div className="relative w-full h-[90vh] overflow-hidden">
        <div
          className="w-full h-[90vh] bg-center bg-cover"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Creating Amazing Websites<br /> With Amazing Graphics
          </h1>
          <p className="text-base md:text-2xl max-w-2xl opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 h-[90vh] bg-center bg-cover"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Creating Amazing Websites<br /> With Amazing Graphics
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
        </p>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
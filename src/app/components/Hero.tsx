"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { mulish } from "@/lib/fonts";

import fondo from "/public/fondo.jpg";

export default function Hero() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        y: -400,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.inOut",
      },
    );
  }, []);
  return (
    <div className="relative min-h-[50vh] w-full text-white">
      <Image
        src={fondo}
        alt="Mi quierubin logo"
        className="absolute z-10 h-full w-full object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-between text-center text-4xl tracking-wide">
        <div className="flex h-full w-full flex-col items-center justify-between p-10">
          <h1 className={`${mulish.className} font-[400]`}>
            Piezas únicas <br />
            Pintadas a mano <br />
            En puntillismo <br />
          </h1>
          <button
            className={`rounded-full bg-[#f4f4f4] px-4 py-2 text-xl font-[200] text-black ${mulish.className}`}
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}

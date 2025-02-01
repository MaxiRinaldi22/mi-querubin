import Image from "next/image";
import Link from "next/link";

// import { playfair } from "@/lib/fonts";

import fondo from "/public/fondo.jpg";
import phrase from "/public/mi-quierubin-web-hero.png";

export default function Hero() {
  return (
    <div className="relative min-h-[50vh] w-full overflow-hidden text-white">
      <Image
        src={fondo}
        alt="Imagen de un mate, con la playa de fondo"
        className="absolute z-10 h-full w-full object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-45"></div>

      <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform tracking-wide">
        <div className="pb-7 container mx-auto flex h-full w-full flex-col items-center justify-between md:items-start">
          <Image
            src={phrase}
            alt="Logo de la marca"
            width={1183}
            height={637}
            className="max-w-[350px] md:max-w-[500px]"
          />
          <button className="rounded-full bg-secondaryColor px-4 py-2 font-semibold tracking-wider text-primaryColor transition-colors duration-500 hover:bg-primaryColor hover:text-secondaryColor">
            <Link href={"/productos"}>COMPRAR AHORA</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// md:left-[60.5%] md:top-[45%]

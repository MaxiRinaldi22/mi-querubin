import Image from "next/image";

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
      <div className="absolute inset-0 z-10 bg-black opacity-25"></div>

      <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform tracking-wide md:left-[57.9%] md:top-[50%]">
        <div className="flex h-full w-full flex-col items-center justify-between p-10 md:items-start">
          {/* <h1
            className="flex flex-col gap-1 text-center text-4xl font-[300] tracking-wide text-shadow-lg md:gap-5 md:text-start md:text-5xl"
          >
            <span className={`${playfair.className} font-semibold md:text-7xl`}>
              Piezas únicas
            </span>
            <span>Pintadas a mano</span>
          </h1> */}
          <Image src={phrase} alt="Logo de la marca" width={500} height={500} />
          <button className="rounded-full bg-secondaryColor px-4 py-2 tracking-wider text-primaryColor">
            COMPRAR AHORA
          </button>
        </div>
      </div>
    </div>
  );
}

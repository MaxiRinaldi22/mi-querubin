import logo from "/public/mi-quierubin-simple-sinfondo-04.png";
import Image from "next/image";

export default function AboutMiQuerubin() {
  return (
    <section className="bg-gradient-to-t from-[#f4f4f4] to-white bg-white text-black pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Image 
            src={logo} 
            alt="Mi Querubín" 
            className="mx-auto " 
            width={200} 
            height={200} 
            priority
          />
          <h2 className="text-3xl font-bold text-secondaryColor mb-4">Sobre Mi Querubín</h2>
          <p className="text-xl leading-relaxed max-w-2xl">
            ¡Bienvenidos a Mi Querubín! Soy Mariana, una apasionada artesana de Maldonado, Uruguay, con 40 años y casi
            18 de matrimonio. Desde mi taller, creo piezas únicas pintadas a mano utilizando la técnica del puntillismo.
            Cada obra es elaborada con dedicación y amor, reflejando mi compromiso con el arte y la originalidad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl leading-relaxed mb-6">
            En Mi Querubín, ofrecemos una variedad de productos artesanales, desde llaveros personalizados hasta materas
            y mates con diseños de mandalas. Cada pieza es cuidadosamente diseñada para brindar un detalle especial a
            quienes las reciben.
          </p>
          <p className="text-xl leading-relaxed">
            Nos enorgullece ser parte de tus momentos especiales, ofreciendo regalos pensados con amor y dedicación.
            Realizamos envíos a todo el país, asegurando que nuestras creaciones lleguen a cada rincón de Uruguay.
          </p>
        </div>
      </div>
    </section>
  );
}

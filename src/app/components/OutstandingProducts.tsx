"use client";

import { useEffect, useState } from "react";
import { CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

import { MainProducts } from "@/lib/const";

export default function ProductCards() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef, _emblaApi] = useEmblaCarousel({ loop: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const ProductCard = ({ title, image }: { title: string; image: string }) => (
    <div className="center group h-48 w-full cursor-pointer rounded-md bg-gradient-to-b from-white via-white/70 to-[#74ffeb]">
      <CardContent className="flex w-full flex-row-reverse items-center justify-between p-0 px-10">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={150}
          height={150}
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <h3 className="text-center text-xl font-bold tracking-wide">{title}</h3>
      </CardContent>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
      {/* Desktop View */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        {MainProducts.map((product) => (
          <Link
            key={product.id}
            href={`/categoria/${product.title.toLowerCase()}`}
          >
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.img}
            />
          </Link>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden" ref={emblaRef}>
        <div className="flex">
          {MainProducts.map((product) => (
            <div key={product.id} className="min-w-0 flex-[0_0_100%] pl-4">
              <Link href={`/categoria/${product.title.toLowerCase()}`}>
                <ProductCard title={product.title} image={product.img} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

import { MainProducts } from "@/lib/const";
import { CardContent } from "@/components/ui/card";

export default function ProductCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
    <div className="center group h-48 w-full cursor-pointer rounded-md shadow-md bg-gradient-to-b from-white to-primaryColor">
      <CardContent className="flex w-full flex-row-reverse items-center justify-between p-0 px-10">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={150}
          height={150}
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <h3 className="text-center text-lg font-bold tracking-wide text-secondaryColor">
          {title.toUpperCase()}
        </h3>
      </CardContent>
    </div>
  );

  const DotButton = ({
    selected,
    onClick,
  }: {
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      className={`mr-2 h-2 w-2 rounded-full transition-all ${selected ? "bg-secondaryColor" : "bg-gray-300"}`}
      type="button"
      onClick={onClick}
    />
  );

  return (
    <div className="container mx-auto px-4 py-14 md:py-12">
      {/* Desktop View */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
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
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
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
        {/* Dots */}
        {isMobile && (
          <div className="mt-4 flex justify-center">
            {MainProducts.map((_, index) => (
              <DotButton
                key={index}
                selected={index === currentIndex}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

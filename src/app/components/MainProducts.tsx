"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";

// Product data
const products = [
  {
    id: 1,
    title: "Smartphone",
    image: "/placeholder.svg?height=200&width=200",
  },
  { id: 2, title: "Laptop", image: "/placeholder.svg?height=200&width=200" },
  {
    id: 3,
    title: "Headphones",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "Smartwatch",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function MainProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isMobile, setIsMobile] = useState(false);

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
    <Card className="w-full h-64">
      <CardContent className="p-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={200}
          className="mb-4 h-48 w-full rounded-md object-cover"
        />
        <h3 className="text-center text-lg font-semibold">{title}</h3>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4">
      {/* Desktop View */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0"
            >
              <ProductCard title={product.title} image={product.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroCarProps {
  car: {
    brand: string;
    model: string;
    price: {
      usd: number;
      tg: number;
    };
    gallery_images: {
      image: string;
      image_type: string;
    }[];
  };
}

const HeroCar = ({ car }: HeroCarProps) => {
  const formatPrice = (num: number) => num.toLocaleString("en-US");

  // Тут вытащим ПЕРВУЮ ФОТКУ (или дефолт заглушку если нет)
  const mainImage = car.gallery_images?.[0]?.image || "/placeholder.jpg";

  return (
    <section className="relative w-full h-[75vh] flex items-end justify-start overflow-hidden">
      <Image
        src={mainImage}
        alt={`${car.brand} ${car.model}`}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/0 to-white/0" />
      <div className="absolute bottom-6 left-6 z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {`${car.brand} ${car.model}`}
        </h1>
        <p className="text-xl md:text-2xl mt-2 mb-6">
          от ${formatPrice(car.price.usd)} ({formatPrice(car.price.tg)} ₸)
        </p>
      </div>
    </section>
  );
};

export default HeroCar;

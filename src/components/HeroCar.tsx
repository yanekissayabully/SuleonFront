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
      main: string;
    };
  };
}

const HeroCar = ({ car }: HeroCarProps) => {
  const formatPrice = (num: number) => num.toLocaleString("en-US");

  return (
    <section className="relative w-full h-[75vh] flex items-end justify-start overflow-hidden">
      {/* Фотка */}
      <Image
        src={car.gallery_images.main}
        alt={`${car.brand} ${car.model}`}
        fill
        className="object-cover object-center"
        priority
      />
      {/* Затемнение как у ncars */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/0 to-white/0" />
      {/* Контент */}
      <div className="absolute bottom-6 left-6 z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {`${car.brand} ${car.model}`}
        </h1>
        <p className="text-xl md:text-2xl mt-2 mb-6">
          от ${formatPrice(car.price.usd)} ({formatPrice(car.price.tg)} ₸)
        </p>
        {/* <div className="flex flex-wrap gap-3">
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+77775553322">Позвонить</a>
          </Button>
          <Button variant="secondary" size="lg">Тест-Драйв</Button>
          <Button variant="secondary" size="lg">Трейд-ин</Button>
        </div> */}
      </div>
    </section>
  );
};

export default HeroCar;

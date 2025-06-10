"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface CarTrim {
  title: string;
  price_usd: number;
  price_tg: number;
  features: string[];
}
interface CarTrimListProps {
  trims: CarTrim[];
}

// const carTrims: CarTrim[] = [
//   {
//     title: "520KM Luxury",
//     priceUsd: 22800,
//     priceTg: 945060,
//     features: [
//       "Базовая комплектация",
//       "Ёмкость батареи — 71,8 кВт·ч",
//       "Запас хода (CLTC) — 520 км",
//       "ABS, EBD/CBC, EBA/BA, TCS/ASR, ESP/DSC",
//       "Активная система оповещения безопасности",
//       "Активные тормоза",
//       "Система удержания полосы движения",
//     ],
//   },
//   {
//     title: "520KM Premium",
//     priceUsd: 24100,
//     priceTg: 998945,
//     features: [
//       "Дополнительные опции к комплектации 520KM Luxury",
//       "Руль с подогревом",
//       "Беспроводная зарядка мобильного телефона",
//       "Электропривод сидений первого ряда с подогревом и вентиляцией",
//       "15,6” мультимедиа",
//       "Многоцветная внутренняя подсветка салона",
//     ],
//   },
//   {
//     title: "605KM Flagship",
//     priceUsd: 24800,
//     priceTg: 1027960,
//     features: [
//       "Дополнительные опции к комплектации 520KM Premium",
//       "Ёмкость батареи — 87,04 кВт·ч",
//       "Запас хода (CLTC) — 605 км",
//     ],
//   },
// ];

export default function CarTrimList({ trims }: CarTrimListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scroll = containerRef.current.scrollLeft;
    const width = containerRef.current.offsetWidth * 0.85; // w-[85vw]
    const index = Math.round(scroll / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">
        Для предзаказа доступны 3 комплектации
      </h2>

      <div
        ref={containerRef}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{}}
      >
        {trims.map((trim, index) => (
          <div
            key={index}
            className="flex-none w-[85vw] md:w-auto border p-6 rounded-lg shadow-sm flex flex-col snap-center"
          >
            <Image
              src="https://ncars.com.ua/images/ZGF0YS9Nb2RlbG5peSByeWFkL0JZRC9CWUQgU29uZyBQbHVzL9Cz0LDQu9C10YDQtdGPL9Ct0LrRgdGC0LXRgNGM0LXRgC80IHBhbGUgc21va3kvMS5qcGd8MTIwMHw4MDB8YQ==.webp"
              alt="BYD Song Plus"
              width={300}
              height={200}
              className="object-cover mb-4 w-full h-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{trim.title}</h3>
            <div className="text-lg font-bold text-blue-700 mb-1">
              {Number(trim.price_usd).toLocaleString("ru-RU", {
                maximumFractionDigits: 0,
              })}
              $
            </div>
            <div className="text-gray-500 mb-4">
              {Number(trim.price_tg).toLocaleString("ru-RU", {
                maximumFractionDigits: 0,
              })}
              ₸
            </div>
            <ul className="flex-1 mb-6 space-y-2 text-sm">
              {trim.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-2">
              Оставить заявку
            </button>
          </div>
        ))}
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {trims.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

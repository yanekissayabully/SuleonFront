"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Car, Star } from "lucide-react";
import LocationMap from "@/components/Map";
import LocationMap2 from "@/components/Map2";

export default function AboutPage() {
  const [activeMap, setActiveMap] = useState<"map1" | "map2">("map1");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер секция */}
      <section className="relative h-96 bg-black">
        <Image
          src="/li9.jpg"
          alt="Suleon Cars"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">О компании Suleon</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Мы — проводник в мир китайских автомобилей. Надежно. Стильно. Доступно.
          </p>
        </div>
      </section>

      {/* Описание компании */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Кто мы такие?</h2>
          <p className="text-gray-700 text-lg">
            Suleon — команда энтузиастов, влюбленных в автомобили. Мы привозим лучшие модели
            китайского автопрома: электромобили, кроссоверы, седаны. Более 9 лет на рынке.
            Более 1000 довольных клиентов. Мы подбираем, доставляем и обслуживаем автомобили, чтобы вы могли наслаждаться качеством без переплат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Car size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Каталог моделей</h3>
            <p className="text-gray-600 text-center">
              Электрокары, гибриды, бензиновые авто — прямые поставки топовых брендов.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Star size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Качество и гарантия</h3>
            <p className="text-gray-600 text-center">
              Официальная гарантия. Поддержка клиентов 24/7. Профессиональная диагностика перед продажей.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <MapPin size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Удобное расположение</h3>
            <p className="text-gray-600 text-center">
              Наш шоурум находится в удобной локации Алматы. Легко приехать, легко выбрать.
            </p>
          </div>
        </div>
      </section>

      {/* Карта - Табы */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Где мы находимся?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Выберите филиал, чтобы посмотреть на карте:
          </p>

          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setActiveMap("map1")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeMap === "map1"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Офис
            </button>
            <button
              onClick={() => setActiveMap("map2")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeMap === "map2"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Магазин запчастей
            </button>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            {activeMap === "map1" && <LocationMap />}
            {activeMap === "map2" && <LocationMap2 />}
          </div>
        </div>
      </section>
    </div>
  );
}

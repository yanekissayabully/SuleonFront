"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Минимальный тип для отображения
interface FavoriteCar {
  id: number;
  slug: string;
  title: string;
  main_image: string;
  price_usd: number;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteCar[]>([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Мои избранные автомобили</h1>
      {favorites.length === 0 ? (
        <p>Пока нет добавленных в избранное машин.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((car) => (
            <div
              key={car.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <Link href={`/cars/${car.slug}`}>
                <Image
                  src={car.main_image}
                  alt={car.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 mb-4 rounded"
                />
                <h2 className="text-xl font-bold mb-2">{car.title}</h2>
                <p className="text-lg text-gray-700">{car.price_usd.toLocaleString()} $</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

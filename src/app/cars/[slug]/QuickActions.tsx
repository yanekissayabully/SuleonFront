"use client";

import { useState, useEffect } from "react";
import { Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FavoriteCar {
  id: number;
  slug: string;
  title: string;
  main_image: string;
  price_usd: number;
}

interface QuickActionsProps {
  car: {
    id: number;
    slug: string;
    brand: string;
    model: string;
    main_image: string;
    price: {
      usd: number;
    };
  };
}

export default function QuickActions({ car }: QuickActionsProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = favorites.some((item: FavoriteCar) => item.id === car.id);
    setIsFavorite(exists);
  }, [car.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const newFavorites = favorites.filter((item: FavoriteCar) => item.id !== car.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      const carForStorage: FavoriteCar = {
        id: car.id,
        slug: car.slug,
        title: `${car.brand} ${car.model}`, // <--- создаём title
        main_image: car.main_image,
        price_usd: car.price.usd,
      };
      favorites.push(carForStorage);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleFavorite}
        className={isFavorite ? "text-red-500 border-red-300" : ""}
      >
        <Heart
          className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
        />
        {isFavorite ? "В избранном" : "В избранное"}
      </Button>
      <Button variant="outline" size="sm">
        <Share2 className="w-4 h-4 mr-2" />
        Поделиться
      </Button>
    </div>
  );
}
